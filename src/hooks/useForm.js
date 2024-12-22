import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormData(initialValue);
  };
  return {
    ...formData,
    formData,
    onInputChange,
    onResetForm,
  };
};
