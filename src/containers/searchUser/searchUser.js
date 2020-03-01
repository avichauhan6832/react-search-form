import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios-form';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import FormSubmission from '../../components/FormSubmission/FormSubmission';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

function searchPage() {


    const SearchUser = () => {
        const { handleSubmit, register, errors } = useForm();
        const onSubmit = values => {
          console.log(values);
        };
      
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
      
            <input
              name="username"
              ref={register({
                validate: value => value !== "admin" || "Nice try!"
              })}
            />
            {errors.username && errors.username.message}
      
            <button type="submit">Search</button>
          </form>
        );
    };

    return (
        <Aux>
            <SearchUser />
        </Aux>
    )
}

export default searchPage;