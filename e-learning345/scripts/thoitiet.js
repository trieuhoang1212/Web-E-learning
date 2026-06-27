const cityInput = document.getElementById("city");
const btnSearch = document.getElementById("btn-search");
const weatherResult = document.getElementById("weather-result");

const API_KEY = "9b7dda0c1cff3645f4837aca1d9a9ea8";

btnSearch.addEventListener("click", async () => {
  const cityName = cityInput.value.trim();

  if (!cityName) {
    weatherResult.innerHTML =
      '<p class="error-msg">Vui lòng nhập tên thành phố!</p>';
    return;
  }

  weatherResult.innerHTML =
    '<p class="loading">Đang tải dữ liệu thời tiết...</p>';

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=vi`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          "Không tìm thấy thành phố này. Vui lòng kiểm tra lại chính tả!",
        );
      } else if (response.status === 401) {
        throw new Error(
          "API Key chưa được kích hoạt. Bạn hãy kiên nhẫn đợi thêm khoảng 10-15 phút nhé!",
        );
      } else {
        throw new Error("Có lỗi xảy ra khi kết nối đến máy chủ.");
      }
    }

    const data = await response.json();

    const actualCityName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    weatherResult.innerHTML = `
      <div class="weather-card">
        <h3>${actualCityName}, ${country}</h3>
        <img src="https://openweathermap.org/img/wn/${iconCode}@4x.png" alt="${description}" />
        <p class="temp">${temp}°C</p>
        <p class="humidity-desc">${description}</p>
        <p class="humidity-desc">Độ ẩm: <b>${humidity}%</b></p>
      </div>
    `;
  } catch (error) {
    weatherResult.innerHTML = `
      <p class="error-msg">
        <i class="fa-solid fa-triangle-exclamation"></i> Lỗi: ${error.message}
      </p>
    `;
  }
});
