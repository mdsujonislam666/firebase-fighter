
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
            <Outlet/>
        </>
    );
};

export default MainLayout;