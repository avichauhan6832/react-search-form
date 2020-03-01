import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>User Form</NavigationItem>
        <NavigationItem link="/">Search</NavigationItem>
    </ul>
);

export default navigationItems;