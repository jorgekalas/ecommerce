import './CartContainer.css'
import {useCartContext} from '../../context/CartContext'



export const CartContainer = ({items = []}) => {

    // const cartItems = useCartContext();
   


return(
        <>


        {/* {cartItems.length === 0 ? ( */}
        <h1 style={{textAlign: 'center', padding: 262}}>Carrito vacío</h1>

         {/* )
         :
         (console.log(""))
         (   
             cartItems.map((i) => { }
        { return (

        <div>
          <p> 
                   {i.title} x {i.amount}
                 { <button onClick={deleteItem}>Borrar ítem</button> }
        {      </p> }
        {            <button variant="danger" onClick={clear}>Vaciar carrito</button> }

        {      </div> }
        {     );
           })
             )} }
        
         } */}
        </>
)}
