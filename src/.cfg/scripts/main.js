var emailButton = document.getElementById("emailButton");
var emailDialog = document.getElementById("viewEmail");
emailButton.addEventListener('click', async () => {
  await emailDialog.show();
});

var chatButton = document.getElementById("chatButton");
var chatDialog = document.getElementById("viewChat");
chatButton.addEventListener('click', async () => {
  await chatDialog.show();
});