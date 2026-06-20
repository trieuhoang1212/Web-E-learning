const result = document.getElementById("result");
const imgResult = document.getElementById("img-result");

document.getElementById("btn-search").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);

  result.innerHTML = "";
  imgResult.innerHTML = "";

  if (!day || !month || day < 1 || day > 31 || month < 1 || month > 12) {
    result.innerHTML =
      '<p class="error" style="color: red;">Vui lòng nhập ngày và tháng hợp lệ.</p>';
    return;
  }

  // Xác định cung hoàng đạo
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bạch Dương</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/bachduong.jpg" alt="Bạch Dương" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Kim Ngưu</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/kimnguu.jpg" alt="Kim Ngưu" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Song Tử</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/songtu.jpg" alt="Song Tử" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Cự Giải</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/cugiai.jpg" alt="Cự Giải" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    result.innerHTML = '<p class="result">Cung hoàng đạo của bạn là: Sư Tử</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/sutu.jpg" alt="Sư Tử" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    result.innerHTML = '<p class="result">Cung hoàng đạo của bạn là: Xử Nữ</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/xunu.jpg" alt="Xử Nữ" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Thiên Bình</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/thienbinh.jpg" alt="Thiên Bình" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bọ Cạp</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/bocap.jpg" alt="Bọ Cạp" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Nhân Mã</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/nhanma.jpg" alt="Nhân Mã" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Ma Kết</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/maket.jpg" alt="Ma Kết" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Bảo Bình</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/baobinh.jpg" alt="Bảo Bình" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    if (day > 29) {
      result.innerHTML =
        '<p class="error" style="color: red;">Tháng 2 không có ngày này.</p>';
      return;
    }
    result.innerHTML =
      '<p class="result">Cung hoàng đạo của bạn là: Song Ngư</p>';
    imgResult.innerHTML =
      '<img src="../imgs/cunghoangdao/songngu.jpg" alt="Song Ngư" style="width: 200px; border-radius: 12px; margin-top: 15px;"/>';
  } else {
    // Trường hợp ngày không hợp lệ với các tháng có 30 ngày
    result.innerHTML =
      '<p class="error" style="color: red;">Ngày sinh không hợp lệ trong tháng này.</p>';
  }
});
