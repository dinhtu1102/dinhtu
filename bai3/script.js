const peopleElement = document.getElementById("people");
const resultElement = document.getElementById("result");

// Danh sách tên người
const names = ["A", "B", "C", "D", "E"];

// Hàm giải bài toán
function solve() {
  // Hiển thị danh sách người
  for (const name of names) {
    const li = document.createElement("li");
    li.textContent = name;
    peopleElement.appendChild(li);
  }

  // Liệt kê các cách chọn
  const combinations = combinationsAlgorithm(names, 3);

  // Hiển thị kết quả
  resultElement.textContent = "";
  for (const combination of combinations) {
    resultElement.textContent += combination + "\n";
  }
}

// Thuật toán liệt kê các tổ hợp
function combinationsAlgorithm(arr, k) {
  const result = [];

  // Duyệt qua tất cả các phần tử
  for (let i = 0; i < arr.length; i++) {
    // Chọn phần tử hiện tại
    const chosen = arr[i];

    // Nếu đã chọn đủ k phần tử, thêm vào kết quả
    if (k === 1) {
      result.push([chosen]);
      continue;
    }

    // Lấy các tổ hợp k - 1 phần tử từ các phần tử còn lại
    const subCombinations = combinationsAlgorithm(arr.slice(i + 1), k - 1);

    // Kết hợp phần tử đã chọn với các tổ hợp k - 1 phần tử
    for (const subCombination of subCombinations) {
      result.push([chosen].concat(subCombination));
    }
  }

  return result;
}