# URLFocus

**URLFocus** is a simple browser extension that automatically closes social media tabs when they are opened. It helps you stay focused by blocking distractions like Facebook, Twitter, and Instagram.

---

## 📂 Files

* **`manifest.json`** — Defines extension metadata, permissions, and the background service worker.
* **`background.js`** — Contains the logic to detect and close social media tabs.

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

4. Click **Load unpacked** (Chrome) or **Load Temporary Add-on** (Firefox) and select the project folder.

5. Open a social media site — the tab should close automatically.

---

## 🌐 Supported Sites

* Facebook
* Twitter (X)
* Instagram

Edit `background.js` to add or remove sites:

```js
const blockedSites = ["facebook.com", "twitter.com", "instagram.com"];
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🚀 Credits

Created by Taseen
