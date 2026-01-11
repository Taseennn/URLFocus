const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

document.getElementById('return').addEventListener('click', () => {
  window.location.href = "./popup.html";
});


// load blocked sites from storage and display them
async function loadBlockedSites() {
  const { blockedSites } = await extensionAPI.storage.local.get({ blockedSites: [] });
  let id = 0;
  document.getElementById('blockedSites').innerHTML =
    blockedSites.map((site, i) => `<li><span>${site}</span> <button id="remove=${i}">remove</button></li>`).join('');

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

// save blocked sites when the save button is clicked
document.getElementById('save').addEventListener('click', async () => {
  const listItems = document.querySelectorAll('#blockedSites li span');
  const blockedSites = Array.from(listItems).map(span => span.textContent.trim());
  await extensionAPI.storage.local.set({ blockedSites });
});

loadBlockedSites();

