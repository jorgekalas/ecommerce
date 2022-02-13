import './ItemList.css'
import samsungS21 from '../../assets/samsungS21.jpg'
import Card from 'react-bootstrap/Card'
import motorolaG60 from '../../assets/motorolaG60.png'
import {Item} from '../Item/Item'
import {ItemListContainer} from '../ItemListContainer/ItemListContainer'
import {useEffect} from 'react'
import {useState} from 'react'
import NavLink from 'react-bootstrap/NavLink'



export const ItemList = (props) => {
    const[productos, setProductos] = useState(null);

    useEffect(()=>{
        setProductos(props.map((productos)=>({
            id: productos.id,
            title: productos.title,
            price: productos.price,
            picture: productos.picture
        })))
    }, [])
    

    return(
        props.data.map((productos)=>(
            <NavLink to={`../Item/${productos.id}`} className="item-link">
                <Item
                    id= {productos.id}
                    title= {productos.title}
                    price= {productos.price}
                    picture= {productos.picture}
                    />
            </NavLink>
        )))

}