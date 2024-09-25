// Function For Noakhlai Flood
document.getElementById("quota-donate").addEventListener("click", function () {
  const donateMoney = getInputValueById("quota-donate-input");
  const currentMoney = getTextValueById("quota-fund");
  const availableBalance = getTextValueById("available-balance");

  if (donateMoney > 0) {
    const newBalance = donateMoney + currentMoney;
    if (availableBalance > 0 && donateMoney < availableBalance) {
      const afterDonateBalanceYouHave = availableBalance - donateMoney;
      document.getElementById("available-balance").innerText =
        afterDonateBalanceYouHave;
      document.getElementById("quota-fund").innerText = newBalance;

      // Transaction History
      const date = new Date();
      const div = document.createElement("div");
      div.classList.add(
        "w-11/12",
        "border",
        "p-7",
        "mx-auto",
        "rounded-xl",
        "mb-4"
      );
      div.innerHTML = `
          <h2 class="font-bold text-3xl mb-4">
            ${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement
          </h2>
          <p class="text-xl">
            Date : ${date}
          </p>
        `;
      document.getElementById("history-section").appendChild(div);
    } else {
      alert("You Don't Have Enough Balance");
    }
  } else {
    alert("Donate Atleast 1 TK");
  }
});
