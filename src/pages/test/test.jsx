import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import styled from 'styled-components';

const Test = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    const data = {
      name: 'Bob Petro',
      email: 'petro@pet.com',
      password: 'qwer1234',
    };
    dispatch(registerThunk(data));
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>
          <span>Phonebook</span>
        </h1>
        <p> Sign up to see contacts.</p>
        <label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be at least 3 characters',
              },
            })}
            type="text"
            placeholder="Full Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          <input
            {...register('email', {
              required: 'Email is required',
              minLength: {
                value: 6,
                message: 'Email should be at least 6 characters',
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters',
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button>Sign up</button>
        <span>
          Have an account? <Link to={'/login'}>Log in</Link>
        </span>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Test;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;
export const StyledForm = styled.form`
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 20px 10px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    position: relative;
    p {
      position: absolute;
      bottom: -11px;
      right: 0;
      color: #ff0000;
      font-size: 14px;
    }
    input {
      height: 40px;
      font-size: 20px;
      padding: 5px 15px;
      max-width: 420px;
      border-radius: 10px;
      border: none;
      margin-bottom: 10px;
    }
    input:invalid {
      border: 2px solid red;
    }
  }

  span {
    text-align: center;
    a {
      color: blue;
    }
  }

  button {
    width: 120px;
    font-size: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: white;

    &:hover,
    &:focus {
      background-color: #f1f1f1;
    }
  }

  h1 {
    border-bottom: 2px solid black;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export const StyledImageContainer = styled.div`
  display: flex;
  width: 300px;
  min-height: 562px;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
