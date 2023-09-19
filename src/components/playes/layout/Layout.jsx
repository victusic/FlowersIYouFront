import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

const Layout = () => {
    
    //const ModalLoginState = useRef(isModal);
    return(
        <div>
            
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

export default Layout;