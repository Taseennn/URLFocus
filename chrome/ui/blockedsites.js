const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

document.getElementById('return').addEventListener('click', () => {
  window.location.href = "./popup.html";
});


// load blocked sites from storage and display them
async function loadBlockedSites() {
  const { blockedSites } = await extensionAPI.storage.local.get({ blockedSites: [] });
  let id = 0;
  document.getElementById('blockedSites').innerHTML =
    blockedSites.map((site, i) => `<li class="RemoveButton"><span>${site}</span> <button id="remove=${i}">&times</button></li>`).join('');

}

// remove site when the remove button is clicked
document.getElementById('blockedSites').addEventListener('click',async (event) => {
  if (event.target.tagName === 'BUTTON') {
    const id = event.target.id.split('=')[1];
    const { blockedSites } = await extensionAPI.storage.local.get({ blockedSites: [] });
    blockedSites.splice(id, 1);
    await extensionAPI.storage.local.set({ blockedSites });
    loadBlockedSites();
  }
});

// add site when the add button is clicked
  document.getElementById('addSiteButton').addEventListener('click', async() => {
    const input = document.getElementById('siteInput');
    const site = input.value.trim();
    if( !site ){ return; }

    const { blockedSites } = await extensionAPI.storage.local.get({ blockedSites: [] });
    blockedSites.push(site);
    await extensionAPI.storage.local.set({ blockedSites });
    
    input.value = '';

    loadBlockedSites();
  });

loadBlockedSites();