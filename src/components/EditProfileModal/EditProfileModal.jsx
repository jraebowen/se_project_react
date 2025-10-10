import { useEffect, useMemo } from "react";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ isOpen, onClose, onUpdateProfile }) => {
  const initialValues = useMemo(
    () => ({
      name: "",
      avatar: "",
    }),
    []
  );

  //validation
  const validate = (input, value) => {
    if (input === "name" && (value.length < 2 || value.length > 30)) {
      return "This is a required field";
    } else if (input === "avatar") {
      const url = /^(ftp|http|https):\/\/[^ "]+$/;
      if (value !== "" && !url.test(value)) {
        return "Enter a valid image URL";
      }
    }
    return "";
  };
  const requiredFields = ["name"];
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
    onUpdateProfile(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={() => isValid}
      title="Change Profile Data"
      buttonText="Save Changes"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="name-edit-input" className="form__label">
          Name*{" "}
          {errors.name && (
            <span className="form__input-error">{errors.name}</span>
          )}
        </label>
        <input
          type="text"
          name="name"
          className="form__input"
          id="name-edit-input"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="avatar-edit-input" className="form__label">
          Avatar{" "}
          {errors.avatar && (
            <span className="form__input-error">{errors.avatar}</span>
          )}
        </label>
        <input
          type="url"
          name="avatar"
          className="form__input"
          id="avatar-edit-input"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
