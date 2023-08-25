let displayContent = '';

function addToDisplay(char) {
  displayContent += char;
  updateDisplay();
}
function clearDisplay() {
  displayContent = '';
  updateDisplay();
}
function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayContent;
}
function calculate() {
  try {
    const result = eval(displayContent);
    alert('Resultado; ' + result);
  } catch (error) {
    alert('Erro de cálculo');
  }
}
