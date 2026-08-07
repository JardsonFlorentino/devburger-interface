import { Outlet } from "react-router-dom";

import { Footer, Header, CartButton } from "../../components";


export function UserLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <CartButton floating />
        </>
    )
}