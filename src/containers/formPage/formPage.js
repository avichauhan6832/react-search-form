import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios-form';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import FormSubmission from '../../components/FormSubmission/FormSubmission';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';



function FormPage() {

    let [formSubmissionResult, setFormSubmissionResult] = useState(false);
    let [loading, setLoading] = useState(false);
    let [showResult, setShowResult] = useState(false);

    useEffect(() => {
      console.log(showResult);
    })

    const stopShowingResult = () => {
      setShowResult(false);
    }
    
    const UserForm = () => {
        const { handleSubmit, register, errors } = useForm();
        const onSubmit = values => {
            setLoading(true);
            setShowResult(true);
            values.middleName = "test";
            values.lastName = "test";
            values.mobileNumber = "1234567890";
            values.address = "test test test";
            values.city = "ahmedabad";
            values.state = "guj";
            values.postalCode = "123456";
            values.education = "Graduate";
            values.gender = "Female";
            values.occupation = "Salaried";
            console.log(values);
            axios.post('/users', values).then((response) => {
              console.log(response);
              setLoading(false);
              if(response.status === 200)
              {
                setFormSubmissionResult(true);
              } else {
                setFormSubmissionResult(false);
              }
            }).catch((err) => {
              setLoading(false);
              console.log(err);
            })
            // console.log(values["username"]);
            // console.log(formSubmissionResult);
            // //console.log(showResult);
        };
      
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email && errors.email.message}
      
            <input
              name="firstName"
              ref={register({
                validate: value => value !== "admin" || "Nice try!"
              })}
            />
            {errors.firstName && errors.firstName.message}
      
            <Button type="submit" >Submit</Button>
          </form>
        );
    };

    let modal = <Modal 
                    show={showResult}
                    modalClosed={stopShowingResult}>
                    <FormSubmission formSubmissionResult={formSubmissionResult}/>
                </Modal>
    
    if(loading) {
      modal = <Spinner />
    }

    return(
        <Aux>
            {modal}
            <UserForm />
        </Aux>
    )
}

export default FormPage;