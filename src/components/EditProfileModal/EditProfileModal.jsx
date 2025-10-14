import { useEffect, useMemo, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ isOpen, onClose, onUpdateProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);

  //validation
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  //clear results when opening modal
  useEffect(() => {
    if (isOpen)
      resetForm({ name: currentUser.name, avatar: currentUser.avatar });
    setValues({
      name: "",
      avatar: "",
    });
  }, [isOpen, resetForm, setValues]);

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
