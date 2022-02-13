import {useEffect} from 'react'
import {useState} from 'react'
import './ItemListContainer.css'
import {productos} from '../../data/data'
import Container from 'react-bootstrap/Container'
import {ItemList} from '../ItemList/ItemList'

const productosList = productos


// export const ItemListContainer = ({title}) =>{
//     return(
//         <>  
//                 <div className="bienvenida">
//             <h1> {title} </h1>
//                 </div>
//             <ItemList/>
//         </>

//     )
// }

export const ItemListContainer = ({title}) =>{
    const [products, setProducts] = useState([])


    useEffect(()=>{
        const promise = obtenerProductos()
        promise.then(json => {setProducts(json)})
    }, [])

    const obtenerProductos = () =>{
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(productosList)
            }, 2000)
        })
        return promise
    }



return (
    <>
    <div className="bienvenida">
        <h1> {title} </h1>
    </div>

    <Container className="nt-5 itemListContainer">
        <ItemList data={productos}/>
    </Container>

    </>
)
}

