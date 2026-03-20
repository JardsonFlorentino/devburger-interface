import PropTypes from "prop-types";
import { CardImage, Container } from "./styled";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";



export function CardProduct({ product }) {

    const { putProductInCart } = useCart();
    const imageUrl = product?.url && (product.url.startsWith('http') || product.url.startsWith('data:'))
        ? product.url
        : `${import.meta.env.VITE_API_URL}${product.url}`;
    return (
        <Container>
            <CardImage src={imageUrl} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>

            <CartButton onClick={() => putProductInCart(product)} ></CartButton>
        </Container>


    )
}


CardProduct.propTypes = {
    product: PropTypes.object,
}



export default CardProduct;