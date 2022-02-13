import {useEffect} from 'react'
import {useState} from 'react'
import './ItemListContainer.css'
import {Productos} from '../../data/data'
import Container from 'react-bootstrap/Container'
import {ItemList} from '../ItemList/ItemList'
import {Item} from '../Item/Item'

const productos = Productos

export const ItemListContainer = ({title}) =>{
    const [products, setProducts] = useState([])


    useEffect(()=>{
        const promise = obtenerProductos()
        promise.then(json => {setProducts(json)})
    }, [products])

    const obtenerProductos = () =>{
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
        })
        return promise
    }


return (
    <>

    <div className="bienvenida">
        <h1> {title} </h1>
    </div>

    <Container className="mt-5 itemListContainer">
        <Item products={productos}/>
    </Container>

    </>
)
}

