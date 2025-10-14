import { useEffect, useMemo } from "react";
import "./LoginModal.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSignUp, handleLogin }) => {
  //validation
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const requiredFields = ["email", "password"];

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) resetForm();
    setValues({
      email: "",
      password: "",
    });
  }, [isOpen, resetForm, setValues]);

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={() => isValid}
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
          {errors.email && (
            <span className="form__input-error">{errors.email}</span>
          )}
        </label>
        <input
          type="email"
          name="email"
          className="form__input"
          id="email-login-input"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-login-input" className="form__label">
          Password{" "}
          {errors.password && (
            <span className="form__input-error">{errors.password}</span>
          )}
        </label>
        <input
          type="password"
          name="password"
          className="form__input"
          id="password-login-input"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default LoginModal;
