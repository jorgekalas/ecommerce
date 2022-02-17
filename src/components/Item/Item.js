import './Item.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'


export const Item=({product})=>{

    
    const currentProduct = product  //guardar en un estado

    return(
        <>

            <Card style={{ width: '18rem' }} key={currentProduct.id}>
                <Card.Img variant="top" src={currentProduct.picture} className="imgCard"/>
                <Card.Body>
                    <Card.Title>{currentProduct.title}</Card.Title>
                    <Card.Text>$ 
                    {currentProduct.price}
                    </Card.Text>
                    
                    <ItemCount initial={0} stock={currentProduct.stock}/>
                </Card.Body>
            </Card>

        </>
    )}