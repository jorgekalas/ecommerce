import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import './ItemCount.css'





export const ItemCount = ({stock, initial})=>{

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


    return(
        
        <div className="itemCount">
            <div className="itemCountControls">
                <Button variant="info" onClick={handleClickDecrease}>-</Button>
                <p className="pContador">{count}</p>
                <Button variant="info" onClick={handleClickIncrease}>+</Button>
            </div>
            <Button>Agregar al carrito</Button>
        </div>

    )
}