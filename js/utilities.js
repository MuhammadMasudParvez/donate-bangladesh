function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

document.getElementById("show-donation").addEventListener("click", function () {
  document.getElementById("donation-cards").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("show-donation").classList.add("bg-[#a3e635]");
  document.getElementById("show-history").classList.remove("bg-[#a3e635]");
  document.getElementById("show-history").classList.add("border-gray-300");
});

document.getElementById("show-history").addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("donation-cards").classList.add("hidden");
  document.getElementById("show-donation").classList.remove("bg-[#a3e635]");
  document.getElementById("show-donation").classList.add("border-gray-300");
  document.getElementById("show-history").classList.add("bg-[#a3e635]");
  document.getElementById("show-history").classList.remove("border-gray-300");
});
