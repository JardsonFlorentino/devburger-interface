import PropTypes from "prop-types";
import { CardImage, Container } from "./styled";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";
import { getProductImageUrl } from "../../utils/getProductImageUrl";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();
    const fallbackImage = new URL("../../assets/banner-home.svg", import.meta.url).href;
    const imageUrl = getProductImageUrl(product, fallbackImage);

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