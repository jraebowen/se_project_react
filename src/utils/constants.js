export const apiKey = import.meta.env.VITE_API_KEY;
export const location = {
  longitude: -118.2426,
  latitude: 34.0549,
};

export const weatherImages = [
  {
    day: true,
    condition: "clear",
    image: new URL("../assets/day/clear.webp", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    image: new URL("../assets/day/clouds.webp", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    image: new URL("../assets/day/fog.webp", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    image: new URL("../assets/day/rain.webp", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    image: new URL("../assets/day/snow.webp", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    image: new URL("../assets/day/thunderstorm.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    image: new URL("../assets/night/clear.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    image: new URL("../assets/night/clouds.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    image: new URL("../assets/night/fog.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    image: new URL("../assets/night/rain.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    image: new URL("../assets/night/snow.webp", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    image: new URL("../assets/night/thunderstorm.webp", import.meta.url).href,
  },
];
