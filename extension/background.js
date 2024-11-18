chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      // Transform URL to embed URL
      const url = new URL(tab.url);
      const videoId = url.searchParams.get("v");
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        chrome.tabs.update(tab.id, { url: embedUrl });
      } else {
        console.error("No video ID found in URL.");
      }
    } else {
      console.error("Not a valid YouTube video URL.");
    }
  });
  