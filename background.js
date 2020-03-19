function openGoogleTabs() {
  browser.tabs.create({
    url: "https://calendar.google.com/calendar/r"
  });
  browser.tabs.create({
    url: "https://keep.google.com/u/0/"
  });
}

browser.browserAction.onClicked.addListener(openGoogleTabs);

