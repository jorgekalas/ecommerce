import {useEffect} from 'react'
import {useState} from 'react'
import './ItemList.css'
import {Productos} from '../../data/data'
import Container from 'react-bootstrap/Container'
import {Item} from '../Item/Item'

const productos = Productos

export const ItemList = () =>{
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

    <Container className="mt-5 itemListContainer">
        <Item products={productos}/>
    </Container>

    </>
)
}
