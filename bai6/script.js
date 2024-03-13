const doThiElement = document.getElementById("do-thi");
const dinhBatDauElement = document.getElementById("dinh-bat-dau");
const ketQuaElement = document.getElementById("ket-qua");

const doThi1 = {
  A: {
    B: 10,
    C: 20,
    D: 5,
  },
  B: {
    A: 10,
    C: 15,
    E: 7,
  },
  C: {
    A: 20,
    B: 15,
    D: 12,
  },
  D: {
    A: 5,
    C: 12,
    E: 8,
  },
  E: {
    B: 7,
    D: 8,
  },
};

const doThi2 = {
  // ...
};

function timcaykhungnhonhat() {
  const doThi = doThi1; // Lấy dữ liệu đồ thị
  const dinhBatDau = dinhBatDauElement.value; // Lấy đỉnh bắt đầu

  // Khởi tạo tập hợp S và cây khung
  const S = new Set([dinhBatDau]);
  const cayKhung = {};

  // Lặp lại cho đến khi S chứa tất cả các đỉnh
  while (S.size < Object.keys(doThi).length) {
    // Tìm cạnh có trọng số nhỏ nhất nối một đỉnh trong S với một đỉnh không thuộc S
    let canhNhoNhat = null;
    let dinhNhoNhat = null;
    for (const dinhTrongS of S) {
      for (const dinhKe in doThi[dinhTrongS]) {
        if (!S.has(dinhKe)) {
          if (!canhNhoNhat || doThi[dinhTrongS][dinhKe] < canhNhoNhat.trongSo) {
            canhNhoNhat = {
              dinh1: dinhTrongS,
              dinh2: dinhKe,
              trongSo: doThi[dinhTrongS][dinhKe],
            };
            dinhNhoNhat = dinhKe;
          }
        }
      }
    }

    // Thêm đỉnh và cạnh vào cây khung
    S.add(dinhNhoNhat);
    cayKhung[canhNhoNhat.dinh1] = canhNhoNhat;
    cayKhung[canhNhoNhat.dinh2] = canhNhoNhat;
  }

  // Hiển thị kết quả
  ketQuaElement.innerHTML = "";
  for (const canh of Object.values(cayKhung)) {
    ketQuaElement.innerHTML += `${canh.dinh1} -- ${canh.dinh2}: ${canh.trongSo}<br>`;
  }
}
