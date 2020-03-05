import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios-form';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import FormSubmission from '../../components/FormSubmission/FormSubmission';
import Button from '../../components/UI/Button/Button';
import SearchList from '../../components/SearchList/searchList';

function SearchPage() {

  let [searchEntered, setSearchEntered] = useState(false);
  let [foundAnyUser, setFoundAnyUser] = useState(false);
  let [showNoUserFoundModel, setShowNoUserFoundModel] = useState(false);
  let [usersResult, setUsersResult] = useState([]);

  const stopShowingModel = () => {
    setShowNoUserFoundModel(false);
  }

    const SearchUser = () => {

        const { handleSubmit, register, errors } = useForm();
        const onSubmit = values => {
          console.log(values);
          setSearchEntered(true);

          axios.get(`/search/?input=${values.username}`).then((response) => {
            console.log(response);
            if(response.data.length > 0) {
              setFoundAnyUser(true);
              setUsersResult(response.data);
            } else {
              setShowNoUserFoundModel(true);
            }
            // response.data.length > 0 ? setFoundAnyUser(true) : setShowNoUserFoundModel(true);
            
          }).catch((err) => {
            console.log(err);
          })

        };

        console.log(foundAnyUser);
        return (
          <div className="ContactData">
            <h4>Enter First name or Last name of the user that you want to search.</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="Input"
                name="username"
                ref={register({
                  validate: value => value !== "admin" || "Nice try!"
                })}
              />
              {errors.username && errors.username.message}
        
              <Button type="submit">Search</Button>
            </form>
          </div>
          
        );
    };

    return (
        <Aux>
          <Modal
            show={showNoUserFoundModel}
            modalClosed={stopShowingModel}>
            <FormSubmission searchModel={true} />
          </Modal>
            <SearchUser />
            <SearchList 
              users={usersResult}
              show={foundAnyUser}/>
        </Aux>
    )
}

export default SearchPage;