const resultElement = document.getElementById("result");

function calculate() {
  let count = 0;

  // Trường hợp chữ số hàng đơn vị là 0
  count += 9 * 8;

  // Trường hợp chữ số hàng đơn vị là 5
  count += 8 * 8;

  resultElement.textContent = count;
}

calculate();
