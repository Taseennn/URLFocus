const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

const blockedSites = [
  "facebook.com",
  "x.com",
  "instagram.com",
  "twitch.tv",
  "snapchat.com",
  "tiktok.com",
  "reddit.com",
];

let blockingEnabled = true;
extensionAPI.storage.local.get({ enabled: true }, ({ enabled }) => {
  blockingEnabled = enabled;
});

extensionAPI.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'SET_BLOCKING') {
    blockingEnabled = !!msg.enabled;
    chrome.storage.local.set({ enabled: blockingEnabled });
    
    if (blockingEnabled) {
      chrome.tabs.query({}, tabs => {
        closeTabs(tabs);
      });
    }
    sendResponse({ success: true });
  }
  return true;
});

function maybeclosetab(tab){
  if(!blockingEnabled){return}
  extensionAPI.tabs.remove(tab.id);
}

function closeTabs(tabs) {
  for (const tab of tabs) {
    if(closeTab(tab)) {
       maybeclosetab(tab);
    }
  }
}

function closeTab(tab) {
    if (!tab.url) return false;
    return blockedSites.some(domain => tab.url.includes(domain));
}

extensionAPI.tabs.query({}).then(closeTabs);

extensionAPI.tabs.onCreated.addListener((tab) => {
  if(closeTab(tab)) {
    maybeclosetab(tab);
  }
});

extensionAPI.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    if(closeTab(tab)) {
        maybeclosetab(tab);
    }
  }
});