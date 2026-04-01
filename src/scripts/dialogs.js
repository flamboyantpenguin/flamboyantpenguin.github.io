var emailButton = document.getElementById("emailButton");
var emailDialog = document.getElementById("emailDialog");

var chatButton = document.getElementById("chatButton");
var chatDialog = document.getElementById("chatDialog");

var pgpButton = document.getElementById("pgpButton");
var pgpDialog = document.getElementById("pgpDialog");

emailButton.addEventListener('click', async () => {
  emailDialog.classList.toggle("show")
});

chatButton.addEventListener('click', async () => {
  chatDialog.classList.toggle("show")
});

pgpButton.addEventListener('click', async () => {
  pgpDialog.classList.toggle("show")
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

  const isClickOutsidePGPDialog = !pgpButton.contains(event.target) && !pgpDialog.contains(event.target);
  if (isClickOutsidePGPDialog) {
    pgpDialog.classList.remove("show");
  }

});
