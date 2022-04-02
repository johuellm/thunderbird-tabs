function openGoogleTabs() {
  browser.tabs.create({
    url: "https://calendar.google.com/calendar/u/0/r/week"
  });
  browser.tabs.create({
    url: "https://keep.google.com/u/0/"
  });
  browser.tabs.create({
    url: "https://outlook.office.com/calendar/view/week"
  });
  browser.tabs.create({
    url: "https://outlook.office.com/mail/"
  });
}

browser.browserAction.onClicked.addListener(openGoogleTabs);

