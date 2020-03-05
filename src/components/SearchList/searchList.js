import React from 'react';

import './searchList.css';
import UserCard from '../UserCard/userCard';

function SearchList(props) {

    return (
        <div className="SearchData" style={{display: props.show ? 'block' : 'none'}}>
            <h4>List of the user</h4>
            {
                props.users.map((item) => (
                    <UserCard key={item._id} user={item}/>
                ))
            }
        </div>
    );
}

export default SearchList;