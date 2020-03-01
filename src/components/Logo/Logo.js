import React from 'react';
import starLogo from '../../assets/images/star.png';
import './Logo.css';

const logo = ( props ) => (
    <div className="Logo" style={{ height: props.height}}>
        <img src={ starLogo } alt="MyStar" />
    </div>
);

export default logo;