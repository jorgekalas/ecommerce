import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import './ItemCount.css'
import samsungS21 from '../../assets/samsungS21.jpg'
import {Item} from '../Item/Item'




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
        <>

        <div className="itemCount">
            <div className="itemCountControls">
            <Button variant="info" onClick={handleClickDecrease}>-</Button>
            <p className="pContador">{count}</p>
            <Button variant="info" onClick={handleClickIncrease}>+</Button>
            </div>
        </div>
{/* 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={samsungS21}/>
            <Card.Body>
                <Card.Title>Samsung S21</Card.Title>
                <Card.Text>
                $180.000.-
                </Card.Text>
                <div className="divContador">
                    <Button variant="info" onClick={handleClickDecrease}>-</Button>
                    <p className="pContador">{count}</p>
                    <Button variant="info" onClick={handleClickIncrease}>+</Button>
                </div>
                    <Button variant="info">Agregar al carrito</Button>
            </Card.Body>
        </Card> */}

        </>
    )
}