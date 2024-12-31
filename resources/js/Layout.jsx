import { Suspense } from 'react';
import { Outlet } from 'react-router';
import NavBar from './components/Navbar/NavBar';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Layout
