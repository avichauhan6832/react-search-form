import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import FormSubmission from '../../components/FormSubmission/FormSubmission';
import Button from '../../components/UI/Button/Button';



function FormPage() {

    let [formSubmissionResult, setFormSubmissionResult] = useState(false);
    
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
            if(values["email"] === "test1@test.com") {
                setFormSubmissionResult(false);
            } else {
                setFormSubmissionResult(true);
            }
            setShowResult(true);
            // console.log(values["email"]);
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
              name="username"
              ref={register({
                validate: value => value !== "admin" || "Nice try!"
              })}
            />
            {errors.username && errors.username.message}
      
            <Button type="submit" >Submit</Button>
          </form>
        );
    };


    return(
        <Aux>
            <Modal 
              show={showResult}
              modalClosed={stopShowingResult}>
                <FormSubmission formSubmissionResult={formSubmissionResult}/>
            </Modal>
            <UserForm />
        </Aux>
    )
}

export default FormPage;