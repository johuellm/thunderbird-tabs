
const gcalendar = document.querySelector("#btn-gcalendar");
const gnotes = document.querySelector("#btn-gnotes");
const omail = document.querySelector("#btn-omail");
const ocalendar = document.querySelector("#btn-ocalendar");
const customurl = document.querySelector("#btn-custom-url"); 

gcalendar.addEventListener("click", (e) => openTab("https://calendar.google.com/calendar/u/0/r/week"));
gnotes.addEventListener("click", (e) => openTab("https://keep.google.com/u/0/"));
omail.addEventListener("click", (e) => openTab("https://outlook.office.com/mail/"));
ocalendar.addEventListener("click", (e) => openTab("https://outlook.office.com/calendar/view/week"));
customurl.addEventListener("click", (e) => {
  urltext = document.querySelector("#custom-url");
  openTab(urltext.value);
});

function openTab(target_url) {
  browser.tabs.create({
    url: target_url,
    active: false
  });
}
