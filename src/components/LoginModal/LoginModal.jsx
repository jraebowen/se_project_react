import { useEffect, useMemo } from "react";
import "./LoginModal.css";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSignUp, handleLogin }) => {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  //validation
  const validate = (input, value) => {
    if (!value) {
      return "This is a required field";
    } else if (input === "email" && (value.length < 2 || value.length > 30)) {
      return "This is a required field";
    } else if (
      input === "password" &&
      (value.length < 2 || value.length > 30)
    ) {
      return "This is a required field";
    }
    return "";
  };

  const requiredFields = ["email", "password"];
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
