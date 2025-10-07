import { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setError({});
    }
  }, [isOpen]);

  //form input functions
  const handleEmailLogin = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateField("email", value);
  };

  const handlePasswordLogin = (e) => {
    const { value } = e.target;
    setPassword(value);
    validateField("password", value);
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
  const handleUserLogin = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    handleLogin(userLogin);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleUserLogin}
      onValidation={validateForm}
      title="Log In"
      buttonText="Log In"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="email-login-input" className="form__label">
          Email*{" "}
          {error.email && (
            <span className="form__input-error">{error.email}</span>
          )}
        </label>
        <input
          type="email"
          className="form__input"
          id="email-login-input"
          placeholder="Email"
          onChange={handleEmailLogin}
          value={email}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-login-input" className="form__label">
          Password*{" "}
          {error.password && (
            <span className="form__input-error">{error.password}</span>
          )}
        </label>
        <input
          type="password"
          className="form__input"
          id="password-login-input"
          placeholder="Password"
          onChange={handlePasswordLogin}
          value={password}
        />
      </fieldset>
      <button
        type="button"
        className="form-modal__secondary-button"
        // onClick={onSwitchToRegister}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
