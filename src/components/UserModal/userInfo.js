import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const userInfo = (props) => {
    let user;
    if(props.user === null || props.user === undefined) {
        user = <div></div>
    } else {
        user = 
            <Aux>
                <p>{props.user.firstName}   {props.user.middleName.length > 0 ? <span>{props.user.middleName}</span>  : null} {props.user.lastName}</p>
                <p>{props.user.email}</p>
                <p>{props.user.mobileNumber}</p>
                {props.user.address.length > 0 ? <p>{props.user.address}</p> : null}
                {props.user.city.length > 0 ? <p>{props.user.city}</p> : null}
                {props.user.state.length > 0 ? <p>{props.user.state}</p> : null}
                {isNaN(props.user.postalCode) || "0" ? null : <p>{props.user.postalCode}</p> }
                <p>{props.user.gender}</p>
                <p>{props.user.education}</p>
                <p>{props.user.occupation}</p>
            </Aux>
    }
    return user;
}

export default userInfo;