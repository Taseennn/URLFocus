const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

const blockedSites = ["facebook.com", "x.com", "instagram.com"];

function closeTabs(tabs) {
  for (const tab of tabs) {
    if(closeTab(tab)) {
        extensionAPI.tabs.remove(tab.id);
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
    extensionAPI.tabs.remove(tab.id);
  }
});


extensionAPI.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    if(closeTab(tab)) {
        extensionAPI.tabs.remove(tab.id);
    }
  }
});