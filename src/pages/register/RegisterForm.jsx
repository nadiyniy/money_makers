import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';

const userRegister = {
  name: '',
  email: '',
  password: '',
};
const RegisterForm = () => {
  const [user, setUser] = useState(userRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(user));
    setUser(userRegister);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title=""
          required
          placeholder="Password"
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have account?
        <link
          href=" "
          onClick={() => {
            navigate('/login');
          }}
        >
          Create an Account
        </link>
      </p>
    </div>
  );
};

export default RegisterForm;
