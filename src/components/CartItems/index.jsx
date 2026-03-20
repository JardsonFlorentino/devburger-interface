import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>{cartProducts?.length ? (
                cartProducts.map((product) => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            {(() => {
                                const imageUrl = product?.url && (product.url.startsWith('http') || product.url.startsWith('data:'))
                                    ? product.url
                                    : `${import.meta.env.VITE_API_URL}${product.url}`;

                                return <ProductImage img src={imageUrl} />;
                            })()}
                        </Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{product.currencyValue}</Table.Td>
                        <Table.Td>
                            <ButtonGroup>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id)} >+</button>

                            </ButtonGroup>

                        </Table.Td>
                        <Table.Td>
                            <ProductTotalPrice>
                                {formatPrice(product.quantity * product.price)}
                            </ProductTotalPrice>
                        </Table.Td>
                        <Table.Td>
                            <TrashImage src={TrashIcon} alt="Lixeira" onClick={() => deleteProduct(product.id)} />
                        </Table.Td>
                    </Table.Tr>
                ))
            ) : (<EmptyCart>Carrinho Vazio</EmptyCart>)}</Table.Body>

        </Table.Root>
    )
}