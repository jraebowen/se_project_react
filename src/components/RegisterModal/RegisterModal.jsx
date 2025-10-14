import { useEffect, useMemo } from "react";
import "./RegisterModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  handleRegistration,
  onLogIn,
  onLoad,
}) => {
  //validation
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) resetForm();
    setValues({ name: "", avatar: "", email: "", password: "" });
  }, [isOpen, resetForm, setValues]);

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
      onLoad={onLoad}
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
          value={values.email || ""}
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
          value={values.password || ""}
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
          value={values.name || ""}
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
          value={values.avatar || ""}
          pattern="https?://.+"
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default RegisterModal;
