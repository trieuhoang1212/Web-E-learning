const provinceSelect = document.getElementById("province");
const wardSelect = document.getElementById("ward");
const registerForm = document.getElementById("register-form");
const resultMessage = document.getElementById("result-card");

const apiProvinceURL =
  "https://huynhminhvangit.github.io/vn-region-api/data/provinces.json";
const apiWardURL =
  "https://huynhminhvangit.github.io/vn-region-api/data/wards.json";

// 1. Tải Tỉnh
fetch(apiProvinceURL)
  .then((r) => r.json())
  .then((data) =>
    data.forEach(
      (p) =>
        (provinceSelect.innerHTML += `<option value="${p.code}">${p.name}</option>`),
    ),
  );

provinceSelect.addEventListener("change", () => {
  wardSelect.innerHTML = '<option value="">-- Chọn Phường/Xã --</option>';
  if (!provinceSelect.value) return;

  fetch(apiWardURL)
    .then((r) => r.json())
    .then((wards) => {
      wards
        .filter((w) => w.province_code == provinceSelect.value)
        .forEach(
          (w) =>
            (wardSelect.innerHTML += `<option value="${w.code}">${w.name}</option>`),
        );
    });
});

// 3. Submit Form
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!wardSelect.value) {
    resultMessage.className = "";
    resultMessage.innerHTML =
      '<b style="color:red">Vui lòng chọn Phường/Xã!</b>';
    return;
  }

  resultMessage.className = "result-card";
  resultMessage.innerHTML = `
    <h3>ĐĂNG KÝ THÀNH CÔNG</h3>
    <p>Công dân: <b>${document.getElementById("name").value}</b></p>
    <p>CCCD: <b>${document.getElementById("id-number").value}</b></p>
    <p>Nơi thường trú: ${document.getElementById("address").value}, ${wardSelect.options[wardSelect.selectedIndex].text}, ${provinceSelect.options[provinceSelect.selectedIndex].text}</p>
  `;
});
