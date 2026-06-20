const result = document.getElementById("result");
const imgResult = document.getElementById("img-result");

document.getElementById("btn-search").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const thienCan = [
    "Quý",
    "Giáp",
    "Ất",
    "Bính",
    "Đinh",
    "Mậu",
    "Kỷ",
    "Canh",
    "Tân",
    "Nhâm",
  ];
  const diaChi = [
    "Hợi",
    "Tý",
    "Sửu",
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
  ];

  const canIndex = (year - 3) % 10;
  const chiIndex = (year - 3) % 12;

  const can = thienCan[canIndex];
  const chi = diaChi[chiIndex];

  result.innerHTML = "";
  imgResult.innerHTML = "";

  if (
    !day ||
    !month ||
    !year ||
    year < 1000 ||
    year > new Date().getFullYear()
  ) {
    result.innerHTML =
      '<p class="error" style="color:red;">Vui lòng nhập ngày, tháng và năm hợp lệ.</p>';
    return;
  }

  // kiểm tra ngày thật
  const date = new Date(year, month - 1, day);

  if (
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) {
    result.innerHTML =
      '<p class="error" style="color:red;">Ngày không hợp lệ.</p>';
    return;
  }

  // Xác định cung hoàng đạo
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bạch Dương và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/bachduong.jpg" alt="Bạch Dương"/>';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Kim Ngưu và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/kimnguu.jpg" alt="Kim Ngưu"/>';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Song Tử và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/songtu.jpg" alt="Song Tử"/>';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Cự Giải và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/cugiai.jpg" alt="Cự Giải"/>';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Sư Tử và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/sutu.jpg" alt="Sư Tử"/>';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Xử Nữ và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/xunu.jpg" alt="Xử Nữ"/>';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Thiên Bình và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/thienbinh.jpg" alt="Thiên Bình"/>';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bọ Cạp và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/bocap.jpg" alt="Bọ Cạp"/>';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Nhân Mã và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/nhanma.jpg" alt="Nhân Mã"/>';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Ma Kết và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/maket.jpg" alt="Ma Kết"/>';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bảo Bình và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/baobinh.jpg" alt="Bảo Bình"/>';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    if (day > 29) {
      result.innerHTML =
        '<p class="error" style="color: red;">Tháng 2 không có ngày này.</p>';
      return;
    }
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Song Ngư và Năm Âm Lịch: ' +
      can +
      " " +
      chi +
      "</p>";
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/songngu.jpg" alt="Song Ngư"/>';
  } else {
    result.innerHTML =
      '<p class="error" style="color: red;">Ngày sinh không hợp lệ trong tháng này.</p>';
  }
});
