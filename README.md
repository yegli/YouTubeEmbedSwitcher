# YouTube Embed Switcher Chrome Extension

This Chrome extension allows you to easily switch YouTube URLs to their embedded versions. With a single click, the extension converts the standard YouTube video URL to the embed URL.

## Features
- Switch from regular YouTube video URL (`youtube.com/watch?v=videoID`) to embed URL (`youtube.com/embed/videoID`).
- Simple and lightweight Chrome extension that enhances your browsing experience.

## Installation Instructions

### Prerequisites
- Google Chrome installed.

### Step 1: Clone this Repository
Clone or download the repository to your local machine:
```bash
git clone https://github.com/your-username/YouTube-Embed-Switcher.git
```

### Step 2: Enable Developer Mode
1. Open Google Chrome and go to `chrome://extensions/`.
2. Toggle the **Developer mode** switch in the top-right corner to **On**.

### Step 3: Load the Extension
1. Click on **Load unpacked**.
2. Select the folder where you downloaded or cloned this repository.

Your extension is now installed!

### Step 4: Use the Extension
1. Navigate to any YouTube video.
2. Click the extension icon in the Chrome toolbar.
3. The URL of the video will automatically change to the embed version (e.g., `https://www.youtube.com/embed/{videoID}`).

---

## How It Works

When you click the extension icon:
1. The script checks if the current page is a YouTube video.
2. If it's a valid YouTube video URL, the extension extracts the video ID.
3. The extension then redirects you to the corresponding embedded video URL.

## Files

- `manifest.json`: Contains the metadata for the Chrome extension (version, permissions, etc.).
- `background.js`: The script that contains the logic for switching URLs.
- `popup.html`: Optional HTML for the popup UI (can be added later if needed).

---

## Development

Feel free to fork this repository and improve the extension!

### Running the Extension Locally

To run the extension locally:
1. Follow the installation steps above.
2. If you modify the code, reload the extension by clicking **Reload** on the `chrome://extensions/` page.

---

## License

This extension is open-source and available under the [MIT License](LICENSE).