import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios-form';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import FormSubmission from '../../components/FormSubmission/FormSubmission';
import Button from '../../components/UI/Button/Button';
import SearchList from '../../components/SearchList/searchList';
import UserModal from '../../components/UserModal/userModal';
import UserInfo from '../../components/UserModal/userInfo';

// Search container
function SearchPage() {

  let [foundAnyUser, setFoundAnyUser] = useState(false); // Flag if any user found
  let [showNoUserFoundModel, setShowNoUserFoundModel] = useState(false); // Flag to show model if no user found
  let [usersResult, setUsersResult] = useState([]); // User result after search hit
  let [userInfo, SetUserInfo] = useState(null); // User Info After click
  let [showUserModel, setShowUserModel] = useState(false); // Flag to show user model

  const stopShowingModel = () => {
    setShowNoUserFoundModel(false);
  }

  const stopShowingUserInfoModel = () => {
    setShowUserModel(false);
  }

    const SearchUser = () => {

        const { handleSubmit, register, errors } = useForm();
        const onSubmit = values => {
          // console.log(values);

          axios.get(`/search/?input=${values.username}`).then((response) => {
            // console.log(response);
            if(response.data.length > 0) {
              setFoundAnyUser(true);
              setUsersResult(response.data);
            } else {
              setShowNoUserFoundModel(true);
            }
            
          }).catch((err) => {
            console.log(err);
          })

        };

        // console.log(foundAnyUser);
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
          <UserModal
            show={showUserModel}
            modalClosed={stopShowingUserInfoModel}>
            <UserInfo user={userInfo}/>
          </UserModal>
          <SearchUser />
          <SearchList
            setUserInfo={SetUserInfo}
            showModel={setShowUserModel} 
            users={usersResult}
            show={foundAnyUser}/>
        </Aux>
    )
}

export default SearchPage;