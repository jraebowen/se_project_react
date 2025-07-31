export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Something went wrong: ${res.status}`);
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.location = data.name;
  result.temp = { F: Math.round(data.main.temp) };
  result.type = data.weather[0].main;
  return result;
};

// console.log(data);
// if (data.main.temp >= 86) {
//   return "hot";
// } else if (data.main.temp >= 66) {
//   return "warm";
// } else {
//   return "cold";
// }
