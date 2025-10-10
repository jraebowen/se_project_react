import { useState, useCallback } from "react";

export default function useForm(initialValues = {}, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // compute new values
    const newValues = { ...values, [name]: value };

    setValues(newValues);

    if (validate) {
      const error = validate(name, value, newValues);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }
  };

  const resetForm = useCallback(
    (newValues = initialValues) => {
      setValues(newValues);
      setErrors({});
    },
    [initialValues]
  );
  const isValid =
    Object.values(errors).every((err) => !err) &&
    Object.values(values).every((val) => val !== "");

  return {
    values,
    errors,
    handleChange,
    resetForm,
    isValid,
    setValues,
    setErrors,
  };
}
