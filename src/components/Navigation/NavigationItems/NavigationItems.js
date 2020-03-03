import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>User Form</NavigationItem>
        <NavigationItem link="/search">Search</NavigationItem>
    </ul>
);

export default navigationItems;