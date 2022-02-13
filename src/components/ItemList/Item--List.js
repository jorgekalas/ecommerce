// import './ItemList.css'
// import samsungS21 from '../../assets/samsungS21.jpg'
// import Card from 'react-bootstrap/Card'
// import motorolaG60 from '../../assets/motorolaG60.png'
// import {Item} from '../Item/Item'
// import {ItemListContainer} from '../ItemListContainer/ItemListContainer'


// export const ItemList=(props)=>{
//     const[productos, setProductos] = useState([]);

//     useEffect(()=>{
//         setProductos(props.productos.map(productos)=>({
//             id: productos.id,
//             title: productos.title,
//             price: productos.price,
//             picture: productos.picture
//         }, []))
//     })

//     return(
//         props.data.map(data)=>(
//             <NavLink to={`../Item/${productos.id}`} className="item-link">
//                 <Item
//                     id= {productos.id}
//                     title= {productos.title}
//                     price= {productos.price}
//                     picture= {productos.picture}
//                     />
//             </NavLink>
//         ))

// }



// export const ItemList=(props)=>{ 

//         const[productos, setProductos] = useState([])

//         useEffect(()=>{
//             setProductos(props.productos.map(productos)=>({
//                 id: productos.id,
//                 title: productos.title,
//                 price: productos.price,
//                 picture: productos.picture
//             }, []
//         )))}

//     return(
//         props.data.map(data)=>(
//             <NavLink to={`../Item/${productos.id}`} className="item-link">
//                 <Item
//                     id= {productos.id}
//                     title= {productos.title}
//                     price= {productos.price}
//                     picture= {productos.picture}
//                     />
//             </NavLink>
//         ))
        

//     // let items = [
    //     {id: 1,
    //     title: "Samsung S21",
    //     price: 180000,
    //     pictureUrl: {samsungS21}
    //     },
    //     {id: 2,
    //     title: "Motorola G60",
    //     price: 120000,
    //     pictureUrl: {motorolaG60}
    //     }
    // ]



    // const promesa = new Promise ((resolve, reject) => {
    //     setTimeout(() =>{
    //     const productos = Item.map(item)

    //     resolve(productos
    //     )
    // })
    // console.log('promesa', promesa)
    // promesa.then((resultado)=>{
    //     return(resultado)
    // }, error =>{
    //     console.log('Error', error)
    // }), 3000
    // })


    // export default Promise




    // return(
    //     <>

    //   products.map(p =>
    //     <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src={samsungS21}/>
    //         <Card.Body>
    //             <Card.Title>Samsung S21</Card.Title>
    //             <Card.Text>
    //             $180.000.-
    //             </Card.Text>
    //             <div className="divContador">
    //                 <Button variant="info" onClick={handleClickDecrease}>-</Button>
    //                 <p className="pContador">{count}</p>
    //                 <Button variant="info" onClick={handleClickIncrease}>+</Button>
    //             </div>
    //                 <Button variant="info">Agregar al carrito</Button>
    //         </Card.Body>
    //     </Card>
    //   )

//         </>
//     )

// }