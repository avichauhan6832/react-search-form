import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="Middle name" name="Middle name" ref={register({pattern: /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile no" name="Mobile no" ref={register({required: true, maxLength: 10, pattern: /[1-9]{2}\d{8}/i })} />
      <textarea name="Address" ref={register({maxLength: 100 })} />
      <input type="text" placeholder="City" name="City" ref={register({maxLength: 25})} />
      <input type="text" placeholder="State" name="State" ref={register({maxLength: 50})} />
      <input type="number" placeholder="Postal Code" name="Postal Code" ref={register({pattern: /\d{6}/i })} />
      <select name="Education" ref={register}>
        <option value="10th">10th</option>
        <option value="12th">12th</option>
        <option value="Graduate">Graduate</option>
        <option value="Post Graduate">Post Graduate</option>
        <option value="None">None</option>
      </select>
      <select name="Gender" ref={register}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Not Selected">Not Selected</option>
      </select>
      <select name="Occupation " ref={register}>
        <option value="Salaried">Salaried</option>
        <option value="Self Employed">Self Employed</option>
        <option value="Other">Other</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default UserForm;