import React, {useState, useContext} from 'react';
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import {CartContext} from '../../context/CartContext'
import Button from 'react-bootstrap/Button'




export const ItemDetail = ({item}) => {
    const currentItem = item


    const {addItem} = useContext(CartContext);
    
    const formatMoney = (number) => {
        return "$ " + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    let [count, setCount] = useState(0);

        const handleClickIncrease = () =>{
            if (count < currentItem.stock){
            setCount(count + 1);
            }}
        

        const handleClickDecrease = () =>{
            if (count > 0){

            setCount(count - 1);
            }}
        



    return(

        <div>

                <Card style={{ width: '18rem' }} key={currentItem.id} className="itemDetail">

                    <Card.Img variant="top" src={currentItem.picture} className="imgCard"/>
                    
                    <Card.Body>
                        <Card.Title>{currentItem.title}</Card.Title>
                        <Card.Text>{currentItem.description}</Card.Text>
                        <Card.Text style={{fontWeight: 'bold', fontSize: '20px'}}>{formatMoney(currentItem.price)}</Card.Text>
                        <ItemCount 
                        count= {count}
                        sub = {handleClickDecrease}
                        add = {handleClickIncrease}
                        /> 
                        <Button onClick={() => addItem(currentItem, count)}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>

        </div>
    )

} 

    
    