import './Item.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import {Productos} from '../../data/data'


export const Item=({products})=>{

    const productos = Productos

    return(
        <>
        <div className="divItems">
        {productos.map((p)=>(

            <Card style={{ width: '18rem' }} key={p.id}>
                <Card.Img variant="top" src={p.picture}/>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>$ 
                    {p.price}
                    </Card.Text>
                    
                    <ItemCount initial={0} stock={6}/>
                </Card.Body>
            </Card>
        
        ))}
        </div>
        </>
    )}