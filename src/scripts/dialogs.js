var emailButton = document.getElementById("emailButton");
var emailDialog = document.getElementById("emailDialog");

var chatButton = document.getElementById("chatButton");
var chatDialog = document.getElementById("chatDialog");

var weatherButton = document.getElementById("weatherButton");
var weatherDialog = document.getElementById("weatherDialog");

emailButton.addEventListener('click', async () => {
  emailDialog.classList.toggle("show")
});

chatButton.addEventListener('click', async () => {
  chatDialog.classList.toggle("show")
});

weatherButton.addEventListener('click', async () => {
  weatherDialog.classList.toggle("show")
});

document.addEventListener('click', (event) => {
  const isClickOutsideEmailDialog = !emailButton.contains(event.target) && !emailDialog.contains(event.target);
  if (isClickOutsideEmailDialog) {
    emailDialog.classList.remove("show");
  }

  const isClickOutsideChatDialog = !chatButton.contains(event.target) && !chatDialog.contains(event.target);
  if (isClickOutsideChatDialog) {
    chatDialog.classList.remove("show");
  }

  const isClickOutsideWeatherDialog = !weatherButton.contains(event.target) && !weatherDialog.contains(event.target);
  if (isClickOutsideWeatherDialog) {
    weatherDialog.classList.remove("show");
  }
});
