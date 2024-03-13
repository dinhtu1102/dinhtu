const boardElement = document.getElementById("board");

// Kích thước bàn cờ
const boardSize = 10;

// Tạo mảng 2 chiều để lưu trữ trạng thái bàn cờ
const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(false));

// Hàm kiểm tra xem có thể đặt quân hậu tại vị trí (row, col) hay không
function canPlaceQueen(row, col) {
  // Kiểm tra các ô trên cùng hàng
  for (let i = 0; i < row; i++) {
    if (board[i][col]) {
      return false;
    }
  }

  // Kiểm tra các ô trên cùng đường chéo
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  // Kiểm tra các ô trên đường chéo phụ
  for (let i = row - 1, j = col + 1; i >= 0 && j < boardSize; i--, j++) {
    if (board[i][j]) {
      return false;
    }
  }

  return true;
}

// Hàm tìm cách xếp 10 quân hậu
function findSolution(row) {
  // Nếu đã đặt hết 10 quân hậu
  if (row === boardSize) {
    return true;
  }

  // Duyệt qua tất cả các cột
  for (let col = 0; col < boardSize; col++) {
    // Nếu có thể đặt quân hậu tại vị trí (row, col)
    if (canPlaceQueen(row, col)) {
      // Đặt quân hậu tại vị trí (row, col)
      board[row][col] = true;

      // Tìm cách xếp 10 quân hậu tiếp theo
      if (findSolution(row + 1)) {
        return true;
      }

      // Gỡ bỏ quân hậu tại vị trí (row, col)
      board[row][col] = false;
    }
  }

  return false;
}

// Tìm cách xếp 10 quân hậu
findSolution(0);

// Hiển thị bàn cờ
for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    if (board
