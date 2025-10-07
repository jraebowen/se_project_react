import { useState, useEffect } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
      setError({});
    }
  }, [isOpen]);

  //form input functions
  const handleEmailRegister = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateField("email", value);
  };

  const handlePasswordRegister = (e) => {
    const { value } = e.target;
    setPassword(value);
    validateField("password", value);
  };

  const handleNameRegister = (e) => {
    const { value } = e.target;
    setName(value);
    validateField("name", value);
  };

  const handleAvatarRegister = (e) => {
    const { value } = e.target;
    setAvatar(value);
    validateField("avatar", value);
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
    } else if (input === "avatar") {
      const url = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!url.test(value)) {
        error = "Enter a valid image URL";
      }
    }
    setError((prev) => ({
      ...prev,
      [input]: error,
    }));
  };

  const validateForm = () => {
    if (
      error.email === "" &&
      error.password === "" &&
      error.name === "" &&
      error.avatar === ""
    ) {
      return true;
    }
  };

  //form submission
  const handleUserRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      name,
      avatar,
    };
    handleRegistration(newUser);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleUserRegister}
      onValidation={validateForm}
      title="Sign Up"
      buttonText="Next"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="email-register-input" className="form__label">
          Email*{" "}
          {error.email && (
            <span className="form__input-error">{error.email}</span>
          )}
        </label>
        <input
          type="email"
          className="form__input"
          id="email-register-input"
          placeholder="Email"
          onChange={handleEmailRegister}
          value={email}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-register-input" className="form__label">
          Password*{" "}
          {error.password && (
            <span className="form__input-error">{error.password}</span>
          )}
        </label>
        <input
          type="password"
          className="form__input"
          id="password-register-input"
          placeholder="Password"
          onChange={handlePasswordRegister}
          value={password}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="name-register-input" className="form__label">
          Name{" "}
          {error.name && (
            <span className="form__input-error">{error.name}</span>
          )}
        </label>
        <input
          type="text"
          className="form__input"
          id="name-register-input"
          placeholder="Name"
          onChange={handleNameRegister}
          value={name}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="avatar-register-input" className="form__label">
          Avatar{" "}
          {error.avatar && (
            <span className="form__input-error">{error.avatar}</span>
          )}
        </label>
        <input
          type="url"
          className="form__input"
          id="avatar-register-input"
          placeholder="Avatar URL"
          onChange={handleAvatarRegister}
          value={avatar}
        />
      </fieldset>
      <button
        type="button"
        className="form-modal__secondary-button"
        // onClick={onSwitchToLogin}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
