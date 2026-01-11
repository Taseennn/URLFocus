const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

document.getElementById('return').addEventListener('click', () => {
  window.location.href = "./popup.html";
});

async function loadBlockedSites() {
  const { blockedSites } = await extensionAPI.storage.local.get({ blockedSites: [] });
  document.getElementById('blockedSites').innerHTML =
    blockedSites.map(site => `<li>${site}</li>`).join('');
}

loadBlockedSites();

