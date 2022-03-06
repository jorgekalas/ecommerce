import './CartContainer.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {CartContext} from '../../context/CartContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'



export const CartContainer = () => {

    const {cartItems, removeItem, clear, precioTotal} = useContext(CartContext);

    const formatMoney = (number) => {
      return "$ " + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
   
    console.log(cartItems)


return(
        <div className="divCartContainer">


        {cartItems.length === 0? (
          <div className="carritoVacio">
 
                <h2>Carrito vacío 😱</h2>

              <Link to={`/`}>
                        <Button className="regresar"> Regresar al Home </Button>
              </Link>
    
        </div>
        )
        

        :
  
        
        (
            

             cartItems.map((it) => { 

              return (
              <div>


                  <div>
                    <Container className="mt-5 itemDetailContainer">
                      <Link to={`/item/${it.item.id}`}>
                        <Card.Img variant="top" src={it.item.picture} className="imgCartCard"/>
                      </Link>
                      
                          <p> 
                                  {it.item.title}  <strong>x {it.amount} u.</strong> = <strong>{formatMoney(it.amount * it.item.price)}</strong>
                          </p> 
                                  <Button onClick={() => removeItem(it.item.id)}>Borrar ítem</Button> 
                                  <Button variant="danger" onClick={clear}>Vaciar carrito</Button> 
                      
                    </Container>
                  </div> 

            </div>
                        )
                      ;
              }
              )

              
              
              )}

              
              { cartItems.length > 0?

                    <span className="precioTotal"> Total: {formatMoney(precioTotal())} </span>
                  
                    :

                    null
                  
              }


            </div>

            )
}
