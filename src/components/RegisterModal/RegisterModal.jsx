import { useEffect, useMemo } from "react";
import "./RegisterModal.css";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, handleRegistration, onLogIn }) => {
  const initialValues = useMemo(
    () => ({
      name: "",
      avatar: "",
      email: "",
      password: "",
    }),
    []
  );

  //validation
  const validate = (input, value) => {
    if (input === "email" && (value.length < 2 || value.length > 30)) {
      return "This is a required field";
    } else if (
      input === "password" &&
      (value.length < 2 || value.length > 30)
    ) {
      return "This is a required field";
    } else if (input === "name" && (value.length < 2 || value.length > 30)) {
      return "Enter a valid name";
    } else if (input === "avatar") {
      const url = /^(ftp|http|https):\/\/[^ "]+$/;
      if (value !== "" && !url.test(value)) {
        return "Enter a valid image URL";
      }
    }
    return "";
  };

  const requiredFields = ["name", "email", "password"];
  const { values, errors, handleChange, resetForm, isValid } = useForm(
    initialValues,
    validate,
    requiredFields
  );

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={() => isValid}
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
          {errors.email && (
            <span className="form__input-error">{errors.email}</span>
          )}
        </label>
        <input
          type="email"
          name="email"
          className="form__input"
          id="email-register-input"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-register-input" className="form__label">
          Password*{" "}
          {errors.password && (
            <span className="form__input-error">{errors.password}</span>
          )}
        </label>
        <input
          type="password"
          name="password"
          className="form__input"
          id="password-register-input"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="name-register-input" className="form__label">
          Name*{" "}
          {errors.name && (
            <span className="form__input-error">{errors.name}</span>
          )}
        </label>
        <input
          type="text"
          name="name"
          className="form__input"
          id="name-register-input"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="avatar-register-input" className="form__label">
          Avatar{" "}
          {errors.avatar && (
            <span className="form__input-error">{errors.avatar}</span>
          )}
        </label>
        <input
          type="url"
          name="avatar"
          className="form__input"
          id="avatar-register-input"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default RegisterModal;
