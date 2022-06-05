import React, { useState } from "react";


const UseForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
      const {name, value} = e.target
      setForm({
          ...form,
          [name]:value
      })
  };
  const handleBlur = (e) => {
      handleChange(e)
      setError(validateForm(form))
  };
  const handleSubmit = () => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default UseForm;
