const customers = [
  { cart: "1234567890", pin: "1234", name: "Sravanthi", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

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
