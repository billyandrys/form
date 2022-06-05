import React from "react";
import UseForm from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments:""
};

const validateForm = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  let errors = {};
  if (!form.name.trim()) {
    errors.name = "required is fielf";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "fielf only letter and blank space ";
  }
  if (!form.email.trim()) {
    errors.email = "required is fielf";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "fielf format email ";
  }
  if (!form.subject.trim()) {
    errors.subject = "required is fielf";
  }
  if (!form.comments.trim()) {
    errors.comments = "required is fielf";
  }else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "fielf comments not execced the 255 caract";
  }
  return errors;
};

const ContacForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validateForm);
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="write your name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="write your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="write your subject"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="write your comments"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
         {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default ContacForm;
