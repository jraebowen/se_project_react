import { useState, useEffect } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, handleRegistration, onLogIn }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
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
      error.username === "" &&
      error.avatar === ""
    ) {
      return true;
    }
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={validateForm}
      title="Sign Up"
      buttonText="Next"
      secondaryButton={
        <button
          type="button"
          className="form-modal__secondary-button_registermodal"
          onClick={onLogIn}
        >
          or Log In
        </button>
      }
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
          name="email"
          className="form__input"
          id="email-register-input"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
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
          name="password"
          className="form__input"
          id="password-register-input"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="name-register-input" className="form__label">
          Name{" "}
          {error.username && (
            <span className="form__input-error">{error.username}</span>
          )}
        </label>
        <input
          type="text"
          name="username"
          className="form__input"
          id="name-register-input"
          placeholder="Name"
          onChange={handleChange}
          value={data.username}
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
          name="avatar"
          className="form__input"
          id="avatar-register-input"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={data.avatar}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default RegisterModal;
