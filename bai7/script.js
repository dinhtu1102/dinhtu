const matrixElement = document.getElementById("matrix");
const resultElement = document.getElementById("result");

// Ma trận trọng số
const matrix = [
    [0, 10 ,8, 9, 7],
    [ 10, 0, 5 ,6 ,2],
    [ 8 ,5, 0 ,3, 1],
    [ 9 ,6, 3 ,0 ,4],
    [ 7 ,2, 1, 4, 0],
];

// Hàm giải bài toán
function solve() {
  // Hiển thị ma trận trọng số
  for (const row of matrix) {
    matrixElement.textContent += row.join(" ") + "\n";
  }

  // Floyd-Warshall algorithm
  const floydWarshall = floydWarshallAlgorithm(matrix);

  // Hiển thị kết quả
  resultElement.textContent = "";
  for (let i = 0; i < floydWarshall.length; i++) {
    for (let j = 0; j < floydWarshall[i].length; j++) {
      resultElement.textContent += floydWarshall[i][j] + " ";
    }
    resultElement.textContent += "\n";
  }
}

// Thuật toán Floyd-Warshall
function floydWarshallAlgorithm(matrix) {
  const n = matrix.length;

  // Khởi tạo ma trận khoảng cách
  const distance = matrix.map((row) => row.slice());

  // Duyệt qua tất cả các đỉnh trung gian
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // Cập nhật khoảng cách
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
      }
    }
  }

  return distance;
}
