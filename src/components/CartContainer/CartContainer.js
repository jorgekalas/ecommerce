import './CartContainer.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {CartContext} from '../../context/CartContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {Timestamp, addDoc, collection, doc, updateDoc} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import {Success} from '../Success/Success'

export const CartContainer = () => {

    const {cartItems, removeItem, clear, precioTotal} = useContext(CartContext);

    const formatMoney = (number) => {
      return "$ " + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
   
    console.log('cart items', cartItems)

    const sendOrder = async (e) => {
      e.preventDefault();
      
      let order= {
        buyer: {
            name: e.target[0].value,
            phone: e.target[1].value,
            email: e.target[2].value,
        },
        items: cartItems,
        total: precioTotal(),
        date: Timestamp.fromDate(new Date())
    }

    console.log('order', order)
    
    const queryCollection = collection(db, 'orders');

    try{

    const docRef = await addDoc(queryCollection, order)

    console.log('docRef', docRef.id)

    } catch(error){

      console.log('Error: ', error)
    }

  }

    // const updateOrder = async() => {
    // const queryDoc = doc(db, 'orders', 'iCWw1oixRNAWl8RVGBuC');
    // await updateDoc(queryDoc, {
    //   buyer: {
    //     name: "Pedro"
    //   }
    // })
    // }




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

              <div>
                    <div className="divPrecioTotal">
                      <span className="precioTotal"> Total: {formatMoney(precioTotal())} </span>
                    </div>
                    <div className="divForm">
                      <Container >
                        <h4>Completá el formulario para terminar tu pedido</h4>
                        <br></br>
                        <Form className="form" onSubmit={sendOrder}>
                            <input type="text" placeholder="nombre"/>
                            <input type="text" placeholder="teléfono"/>
                            <input type="text" placeholder="email"/>
                            <br></br>
                              <Button type="submit">Enviar</Button>
                              <br></br>
                              <Link to={'/success'}>
                                <Button style={{'AlignSelf':'center'}} variant="success" onClick={clear} >Finalizar</Button>
                              </Link>   
                        </Form>
                      </Container>
                      {/* <Button onClick={updateOrder}>Actualizar orden</Button> */}
                  </div>
                </div>
                    :

                    null
                  
              }

              {
                
              }


            </div>

            )
}
