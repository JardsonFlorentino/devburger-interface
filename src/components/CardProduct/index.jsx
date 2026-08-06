import PropTypes from "prop-types";
import { CardImage, Container } from "./styled";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    const apiURL = import.meta.env.VITE_API_URL || 'https://apiburger.jardsonflorentino.com.br';

    let imageUrl = '';
    if (product?.url) {
        if (product.url.startsWith('http') || product.url.startsWith('data:')) {
            imageUrl = product.url;
        } else {
            imageUrl = `${apiURL.replace(/\/$/, '')}/${product.url.replace(/^\//, '')}`;
        }
    } else if (product?.path) {
        imageUrl = `${apiURL.replace(/\/$/, '')}/product-file/${product.path.replace(/^\//, '')}`;
    } else {
        imageUrl = new URL('../../assets/banner-home.svg', import.meta.url).href;
    }

    return (
        <Container>
            <CardImage src={imageUrl} alt={product.name} loading="lazy" />
            <div className="details">
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>

            <CartButton onClick={() => putProductInCart(product)} aria-label={`Adicionar ${product.name} ao carrinho`} />
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};

export default CardProduct;