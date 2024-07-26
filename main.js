let currentAmount = 20000;

const currentAmountElement = document.getElementById("current-amount");
const amountInput = document.getElementById("amount-input");
const depositButton = document.getElementById("deposit");
const withdrawalButton = document.getElementById("withdrawal");

function updatedAmount() {
  currentAmountElement.innerHTML = `Current Amount: ${currentAmount} pkr`;
}

updatedAmount();

depositButton.addEventListener("click", () => {
  const amount = parseInt(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    currentAmount += amount;
    updatedAmount();
    amountInput.value = "";
  } else {
    alert("Please enter a valid amount for deposit.");
  }
});

withdrawalButton.addEventListener("click", () => {
  const amount = parseInt(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= currentAmount) {
      currentAmount -= amount;
      updatedAmount();
      amountInput.value = "";
    } else {
      alert("Insufficient funds for withdrawal.");
    }
  } else {
    alert("Please enter a valid amount for withdrawal.");
  }
});
