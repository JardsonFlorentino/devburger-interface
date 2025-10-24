import { useContext, useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts;
            newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1;
            setCartProducts(newProductsInCart);


            toast.info(`Quantidade de ${product.name} atualizada!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart);


            toast.success(`${product.name} adicionado ao carrinho!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }

        updateLocalStorage(newProductsInCart);
    }

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);


        toast.error('Item removido do carrinho', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            })
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    }

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, [])

    return (
        <CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context');
    }
    return context;
}
