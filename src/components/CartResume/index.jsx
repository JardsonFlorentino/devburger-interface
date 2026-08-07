import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { api } from '../../services/api';
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button"
import { Container } from "./styles"



export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllItems);

    }, [cartProducts])


    const submitOrder = async () => {
        if (!cartProducts.length) {
            toast.info('Adicione itens ao carrinho para continuar.');
            return;
        }

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            }
        })

        try {
            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout', {
                state: data
            });

        } catch (error) {
            const apiErrorMessage =
                error?.response?.data?.error ||
                error?.response?.data?.message ||
                error?.message;

            const message = error?.code === 'ERR_NETWORK'
                ? 'Não foi possível conectar ao serviço de pagamento. Tente novamente em instantes.'
                : apiErrorMessage || 'Erro ao iniciar pagamento. Tente novamente!';

            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } finally {
            setIsSubmitting(false);
        }

        /* try {
            const { status } = await api.post('/orders', { products }, {
                validateStatus: () => true
            });

            if (status === 200 || status === 201) {

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                clearCart();
                toast.success('Pedido realizado com sucesso');
            } else if (status === 409) {
                toast.error('Falha ao realizar o pedido');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Falha no sistema, tente novamente');
        } */
    }


    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>

                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>

            <Button onClick={submitOrder} disabled={isSubmitting}>
                {isSubmitting ? 'Processando...' : 'Finalizar pedido'}
            </Button>

        </div>
    )
}