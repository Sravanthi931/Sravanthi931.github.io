const users = {
  "12345678": { pin: "1111", name: "Alice" },
  "87654321": { pin: "2222", name: "Bob" }
};

function submit() {
  const card = document.getElementById("cardNumber").value;
  const pin = document.getElementById("pin").value;
  const message = document.getElementById("message");

  if (users[card] && users[card].pin === pin) {
    message.textContent = "Welcome " + users[card].name + "!";
  } else {
    message.textContent = "Invalid card or PIN.";
  }
}
