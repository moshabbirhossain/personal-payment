import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import FooterNav from '../components/FooterNav';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <div className='min-h-screen overflow-y-auto py-28'>
                <Outlet/>
            </div>
            <FooterNav/>
        </div>
    );
};

export default MainLayout;