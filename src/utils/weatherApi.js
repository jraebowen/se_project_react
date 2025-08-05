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
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const getWeatherType = (data) => {
  if (data >= 80) {
    return "hot";
  } else if (data >= 66 && data < 80) {
    return "warm";
  } else {
    return "cold";
  }
};

const isDay = ({ sunrise, sunset }, now) => {
  return now > sunrise * 1000 && now < sunset * 1000;
};
