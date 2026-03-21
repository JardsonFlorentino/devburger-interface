import { Outlet } from "react-router-dom";

import { Footer, Header, CartButton } from "../../components";
import { useCart } from "../../hooks/CartContext";


export function UserLayout() {
    const { cartProducts } = useCart();
    const cartCount = cartProducts?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <CartButton floating count={cartCount} />
        </>
    )
}