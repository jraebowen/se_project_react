import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <input
        type="checkbox"
        className="weather-toggle"
        id={`weather-toggle-switch`}
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <label
        htmlFor={`weather-toggle-switch`}
        className="weather-toggle__label"
      >
        <span className="weather-toggle__button"></span>
        <span
          className={`weather-toggle__text weather-toggle__text_fahrenheit ${
            currentTemperatureUnit === "F"
              ? "weather-toggle__text_color-white"
              : ""
          }`}
        >
          F
        </span>
        <span
          className={`weather-toggle__text weather-toggle__text_celsius
${currentTemperatureUnit === "C" ? "weather-toggle__text_color-white" : ""}`}
        >
          C
        </span>
      </label>
    </>
  );
}

export default ToggleSwitch;
