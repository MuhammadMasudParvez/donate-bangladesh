function getInputValueById(id) {
  const inputValue = document.getElementById("input" + id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextValueById(id) {
  const textValue = document.getElementById("input" + id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
