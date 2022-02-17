import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'




export const ItemDetail = ({item}) => {
    const currentItem = item

    return(
        <>

            <Card style={{ width: '18rem' }} key={currentItem.id}>
                <Card.Img variant="top" src={currentItem.picture} className="imgCard"/>
                <Card.Body>
                    <Card.Title>{currentItem.title}</Card.Title>
                    <Card.Text>{currentItem.description}</Card.Text>
                    <Card.Text>$ {currentItem.price}</Card.Text>
                    <ItemCount initial={0} stock={currentItem.stock}/>
                </Card.Body>
            </Card>

        </>
    )

} 

    
    