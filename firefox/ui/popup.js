const extensionAPI = typeof browser !== "undefined" ? browser : chrome;
const toggle = document.getElementById('toggle');

extensionAPI.storage.local.get({ enabled: true }, ({ enabled }) => {
  toggle.checked = enabled;
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  extensionAPI.runtime.sendMessage({ type: 'SET_BLOCKING', enabled });
});

document.getElementById('ManageBlockedSites').addEventListener('click', () => {
  window.location.href = "./blockedsites.html";
});
