import Cart from '../../assets/cart.svg';
import { ContainerButton, Badge } from './styles';
import { useNavigate } from 'react-router-dom';

export function CartButton({ count = 0, floating = false, ...props }) {
    const navigate = useNavigate();

    function handleClick(e) {
        if (props.onClick) return props.onClick(e);
        navigate('/carrinho');
    }

    return (
        <ContainerButton {...props} floating={floating} onClick={handleClick} aria-label="Abrir carrinho">
            <img src={Cart} alt="Ícone do carrinho" />
            {count > 0 && <Badge key={count}>{count > 99 ? '99+' : count}</Badge>}
        </ContainerButton>
    )
}

export default CartButton;