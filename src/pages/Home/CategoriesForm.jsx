import React from 'react';
import { useForm } from 'react-hook-form';

const CategoriesForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      {/* логіка вибору фрми для рендеру і додати форму для рендеру */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter category name" {...register('category')} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CategoriesForm;
