import React, {useState} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ( props ) => {

    let [showSideDrawer, SetShowSideDrawer] = useState(false)

    const sideDrawerClosedHandler = () => {
        SetShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        SetShowSideDrawer((prevState) => {
            SetShowSideDrawer(!prevState.showSideDrawer);
        })
    }

    return (
        <Aux>
        <Toolbar drawerToggleClicked={ sideDrawerToggleHandler }/>
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
        <main className="Content">
            { props.children }
        </main>
    </Aux>
    )



};

export default Layout;