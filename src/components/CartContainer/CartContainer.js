import './CartContainer.css'
import {useCartContext} from '../../context/CartContext'

export const CartContainer = ({items = []}) => {

    const cartItems = useCartContext();
    console.log(cartItems)

    const clear = () => {
        cartItems = []
    }

    const deleteItem = (item) => {

        cartItems.filter(product=> product.id !== item.id)

    }

return(
    <>
        {cartItems.length === 0 ? (
        <h1 style={{textAlign: 'center', padding: 262}}>Carrito vacío</h1>
        )
        :
        (   
            cartItems.map((i) => {
                return (
                    <>
                    <p>
                        {i.title} x {i.amount} unidades
                        <button onClick={deleteItem}>Borrar ítem</button>
                    </p>
                        <button variant="danger" onClick={clear}>Vaciar carrito</button>

                    </>
                );
                })
            )}
    </>
)}
