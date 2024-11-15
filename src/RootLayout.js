import HeaderMenu from './menu/header-menu';
import FooterMenu from './menu/footer-menu';
import { Outlet } from 'react-router-dom';
export function RootLayout(){
    return(
        <>
        <HeaderMenu/>
        <Outlet/>
        <FooterMenu/>
        </>
    );
}