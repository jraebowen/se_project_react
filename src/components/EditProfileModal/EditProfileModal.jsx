import { useState, useEffect } from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ isOpen, onClose, handleEditProfileModal }) => {
  const [data, setData] = useState({
    name: "",
    avatar: "",
  });
  const [error, setError] = useState("");

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
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
    if (error.name === "" && error.avatar === "") {
      return true;
    }
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfileModal(data);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onValidation={validateForm}
      title="Name*"
      buttonText="Save Changes"
    >
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
          onChange={handleChange}
          value={data.name}
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
          onChange={handleChange}
          value={data.avatar}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
