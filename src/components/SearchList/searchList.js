import React from 'react';

import './searchList.css';
import UserCard from '../UserCard/userCard';
import axios from '../../axios-form';

function SearchList(props) {

    const getUserInfo = (props, id) => {
        axios.get(`/users/${id}`).then((response) => {
            props.setUserInfo(response.data);
            props.showModel(true);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="SearchData" style={{display: props.show ? 'block' : 'none'}}>
            <h4>List of the user</h4>
            {
                props.users.map((item) => (
                    <div onClick={() => {
                        getUserInfo(props, item._id);
                    }} key={item["_id"]} style={{cursor: 'pointer' }}><UserCard user={item}/></div>
                ))
            }
        </div>
    );
}

export default SearchList;