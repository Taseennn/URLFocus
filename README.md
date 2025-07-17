# URLFocus

**URLFocus** is a simple browser extension that automatically closes social media tabs when they are opened. It helps you stay focused by blocking distractions like Facebook, Twitter, and Instagram.

---

## 📂 Files

* **`manifest.json`** — Defines extension metadata, permissions, and the background service worker (FOR FIREFOX)
* **`manifest-chrome.json`** — Defines extension metadata, permissions, and the background service worker (FOR CHROME)
* **`background-script.js`** — Contains the logic to detect and close social media tabs.

---

## ✅ Features

* Runs in the background as a service worker.
* Monitors newly opened tabs.
* Closes tabs that match social media URLs instantly.

---

## ⚙️ Installation (Development)

1. Clone or download this repository:

   ```bash
   git clone https://github.com/Yabek9000/URLFocus
   cd URLFocus
   ```

2. Open your browser’s extensions page:

   * **Chrome:** `chrome://extensions/`
   * **Firefox:** `about:debugging#/runtime/this-firefox`

3. Enable **Developer Mode** (Chrome) or **This Firefox** (Firefox).

4. 👉 **Pick the right manifest:**
   - For **Chrome**, rename `manifest-chrome.json` to `manifest.json` in the project folder.
   - For **Firefox**, no changes needed (the default `manifest.json` is correct).

5. Click **Load unpacked** (Chrome) or **Load Temporary Add-on** (Firefox) and select the project folder.

6. Open a social media site — the tab should close automatically.

---

## 🌐 Supported Sites

* Facebook
* Twitter (X)
* Instagram
* Twitch
* YouTube
* Spotify
* Snapchat
* TikTok
* Reddit

Edit `background-script.js` to add or remove sites:

```js
const blockedSites = ["facebook.com", "twitter.com", "instagram.com"];
```

## 🚀 Credits

Created by Taseen
