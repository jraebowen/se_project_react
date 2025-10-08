import { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSignUp, handleLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setData({
        username: "",
        email: "",
        password: "",
        avatar: "",
      });
      setError({});
    }
  }, [isOpen]);

  //form input functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  //validation
  const validateField = (input, value) => {
    let error = "";
    if (!value) {
      error = "This is a required field";
    } else if (input === "email" && (value.length < 2 || value.length > 30)) {
      error = "This is a required field";
    } else if (
      input === "password" &&
      (value.length < 2 || value.length > 30)
    ) {
      error = "This is a required field";
    } else if (input === "name" && (value.length < 2 || value.length > 30)) {
      error = "This is a required field";
    }

    setError((prev) => ({
      ...prev,
      [input]: error,
    }));
  };

  const validateForm = () => {
    if (error.email === "" && error.password === "") {
      return true;
    }
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={validateForm}
      title="Log In"
      buttonText="Log In"
      secondaryButton={
        <button
          type="button"
          className="form-modal__secondary-button_loginmodal"
          onClick={onSignUp}
        >
          or Register
        </button>
      }
    >
      <fieldset className="form__fieldset">
        <label htmlFor="email-login-input" className="form__label">
          Email{" "}
          {error.email && (
            <span className="form__input-error">{error.email}</span>
          )}
        </label>
        <input
          type="email"
          className="form__input"
          id="email-login-input"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-login-input" className="form__label">
          Password{" "}
          {error.password && (
            <span className="form__input-error">{error.password}</span>
          )}
        </label>
        <input
          type="password"
          className="form__input"
          id="password-login-input"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default LoginModal;
