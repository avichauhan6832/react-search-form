import React from 'react';
import './userCard.css';
// import starLogo from '../../assets/images/star.png';


function Userard(props) {
    return (
       <div className="UserCard">
           <img src={require(`../../assets/images/profile/${Math.floor(Math.random() * 3) + 1}.png`)} className="UserImg" alt={props.user.firstName}/>
           <div>
                <p>{props.user.firstName} {props.user.lastName}</p>
                <p style={{fontSize: "12px", marginTop:"10px"}}>{props.user.email}</p>
           </div>
       </div>
    );
}

export default Userard;
