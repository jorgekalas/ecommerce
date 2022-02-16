import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList'
import {Productos} from '../../data/data'



export const ItemListContainer = ({title}) => {

const [products, setProducts] = useState([])


useEffect(()=>{
    const promise = obtenerProductos()
    promise.then(json => {setProducts(json)})
}, [products])

const obtenerProductos = () =>{
    const promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(Productos)
        }, 2000)
    })
    return promise
}


return (
    <>

    <div className="bienvenida">
        <h1> {title} </h1>
    </div>

    <ItemList productsList={products}/>

    </>
)
}

