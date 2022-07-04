import React from 'react';
import MainTopBar from './TopBar/TopBar';
import Footer from './Footer/Footer';

const MainLayout = ({ children }) => {
    return ( 
        <>
        <MainTopBar />
        <div className="main-content">{children}</div>
        <Footer />
        </>
    );
}
 
export default MainLayout;