// // Function For Noakhlai Flood
// document
//   .getElementById("noakhali-donate")
//   .addEventListener("click", function () {
//     const donateMoney = getInputValueById("noakhali-donate-input");
//     const currentMoney = getTextValueById("noakhali-fund");
//     const availableBalance = getTextValueById("available-balance");

//     if (donateMoney > 0) {
//       const newBalance = donateMoney + currentMoney;
//       if (availableBalance > 0 && donateMoney < availableBalance) {
//         const afterDonateBalanceYouHave = availableBalance - donateMoney;
//         document.getElementById("available-balance").innerText =
//           afterDonateBalanceYouHave;
//       } else {
//         alert("You Don't Have Enough Balance");
//       }
//       document.getElementById("noakhali-fund").innerText = newBalance;
//     } else {
//       alert("Donate Atleast 1 TK");
//     }
//   });

// Function For Noakhlai Flood
function upDateCardBalance(cardId) {
  const donateMoney = getInputValueById("input" + cardId);
  console.log(donateMoney);
  const currentMoney = getTextValueById("");
  const availableBalance = getTextValueById("");

  if (donateMoney > 0) {
    const newBalance = donateMoney + currentMoney;
    if (availableBalance > 0 && donateMoney < availableBalance) {
      const afterDonateBalanceYouHave = availableBalance - donateMoney;
      document.getElementById("available-balance").innerText =
        afterDonateBalanceYouHave;
    } else {
      alert("You Don't Have Enough Balance");
    }
    document.getElementById("noakhali-fund").innerText = newBalance;
  } else {
    alert("Donate Atleast 1 TK");
  }
}
