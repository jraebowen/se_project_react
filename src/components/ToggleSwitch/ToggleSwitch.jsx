import "./ToggleSwitch.css";

function ToggleSwitch({ weatherToggleOn, handleWeatherToggle }) {
  return (
    <>
      <input
        type="checkbox"
        className="weather-toggle"
        id={`weather-toggle-switch`}
        checked={weatherToggleOn}
        onChange={handleWeatherToggle}
      />
      <label
        htmlFor={`weather-toggle-switch`}
        className="weather-toggle__label"
      >
        <span className="weather-toggle__button"></span>
        <span
          className="weather-toggle__fahrenheit"
          style={{ color: !weatherToggleOn && "#fff" }}
        >
          F
        </span>
        <span
          className="weather-toggle__celcius"
          style={{ color: weatherToggleOn && "#fff" }}
        >
          C
        </span>
      </label>
    </>
  );
}

export default ToggleSwitch;
