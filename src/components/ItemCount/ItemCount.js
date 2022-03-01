import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button'
import './ItemCount.css'
import {useCartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'


export const ItemCount = ({stock, initial, onAdd})=>{



    let [count, setCount] = useState(initial);

        const handleClickIncrease = () =>{
            if(count < stock){
            setCount(count +1)
            }
        }

        const handleClickDecrease = () =>{
            if(count >0){
                setCount(count -1)
            }
        }


    let [valOnAdd, setValOnAdd] = useState(onAdd)

    const handleOnAdd = () =>{
        if(count>0){
            setValOnAdd(onAdd = count)
        }
        console.log('onAdd', onAdd)


    }


   




    return(
        <>
        <div className="itemCount">
            <div className="itemCountControls">
                <Button variant="info" onClick={handleClickDecrease}>-</Button>
                <p className="pContador">{count}</p>
                <Button variant="info" onClick={handleClickIncrease}>+</Button>
            </div>

            {

                        count > 0?

                        <div>
                            <Button onClick={handleOnAdd}>Agregar al carrito</Button>
                        </div>

                        :

                        <Button disabled>Agregar al carrito</Button>


            }

            {           count>0 && valOnAdd > 0?

                        <div>
                            <Link to={"/cart"}>
                                <Button className="terminarCompra" variant="secondary">Terminar compra</Button>
                            </Link>
                        </div>

                        :

                        <div></div>
            }


            </div>
        </>

    )
}
