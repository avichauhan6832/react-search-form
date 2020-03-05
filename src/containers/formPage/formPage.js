import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios-form';

import './formPage.css';
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
              setFormSubmissionResult(false)
              setLoading(false);
              console.log(err);
            })

            // console.log(formSubmissionResult);
            // //console.log(showResult);
        };
      
        return (
          <div className="ContactData" >
            <h4>Enter your Info</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
              <input className="Input" type="text" placeholder="First name" name="firstName" ref={register({required: true, pattern:{value:/^[A-Za-z]+$/i, message: "Only alphabets are allowed" } })} />
              <input className="Input" type="text" placeholder="Middle name" name="middleName" ref={register({pattern:{value:/^[A-Za-z]+$/i, message: "Only alphabets are allowed" } })} />
              <input className="Input" type="text" placeholder="Last name" name="lastName" ref={register({required: true, pattern: {value:/^[A-Za-z]+$/i, message: "Only alphabets are allowed" } } )} />
              <input className="Input" type="text" placeholder="Email" name="email" ref={register({required: true, pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" }})} />
                <p>{errors.email && errors.email.message}</p>
              <input className="Input" type="tel" placeholder="Mobile no" name="mobileNumber" ref={register({required: true, maxLength: 10, pattern: { value: /[1-9]{2}\d{8}/i, message:"Invalid Mobile Number" } })} />
                {errors.mobileNumber && errors.mobileNumber.message}
              <textarea className="Input" name="address" placeholder="Enter Address" ref={register({maxLength: 100 })} />
              <input className="Input" type="text" placeholder="City" name="city" ref={register({maxLength: 25})} />
              <input className="Input" type="text" placeholder="State" name="state" ref={register({maxLength: 50})} />
              <input className="Input" type="number" placeholder="Postal Code" name="postalCode" ref={register({pattern: /\d{6}/i })} />
              <select className="Input" name="education" ref={register}>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="None">None</option>
              </select>
              <select className="Input" name="gender" ref={register}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not Selected">Not Selected</option>
              </select>
              <select className="Input" name="occupation " ref={register}>
                <option value="Salaried">Salaried</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Other">Other</option>
              </select>

              <Button className="btn" type="submit">Submit</Button>
            </form>
          </div>
          
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