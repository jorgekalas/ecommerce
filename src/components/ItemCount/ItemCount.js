import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import './ItemCount.css'




export const ItemCount = ({stock, initial})=>{

    let [count, setCount] = useState(initial);

        const handleClickIncrease = () =>{
            if(count < stock){
            setCount(++count)
            }
        }

        const handleClickDecrease = () =>{
            if(count >0){
                setCount(--count)
            }
        }


    return(
        
        <div className="itemCount">
            <div className="itemCountControls">
                <Button variant="info" onClick={handleClickDecrease}>-</Button>
                <p className="pContador">{count}</p>
                <Button variant="info" onClick={handleClickIncrease}>+</Button>
            </div>
        </div>

    )
}