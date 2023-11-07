function sendMessage() {
  const BOT_TOKEN = "6666307040:AAHV0ro74UdhMhxzX7VEJIwDWZhWanzo_4U";
  const CHAT_ID = "-1002125344227";

  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone").value;
  const companyName = document.getElementById("company").value;

  let message =
    "Имя: " +
    name +
    ".\nНазвание компании: " +
    companyName +
    ".\nНомер телефона: " +
    +"998 " +
    phoneNumber;

  let url = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage";
  let data = {
    chat_id: CHAT_ID,
    text: message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // window.location.href = "../confirm.html";
      alert("Завершено успешно. Дождитесь обратного звонка!");
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
    })
    .catch((error) => {
      alert("Failed to submit feedback. Please try again later.");
    });
}
