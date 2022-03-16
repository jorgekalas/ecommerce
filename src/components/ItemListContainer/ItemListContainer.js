import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList'
// import {Productos} from '../../data/data' //Utilizado en caso de no emplear FireBase
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
import {collection, getDocs} from "firebase/firestore";
import {db} from '../../utils/firebase'


export const ItemListContainer = ({title}) => {

 const [products, setProducts] = useState([])

 const {idCategory} = useParams ();


    useEffect(()=>{
        const getDataCat = async() =>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const dataCat = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
            setProducts(dataCat)


            if(idCategory){
                const filteredByIdCategory = dataCat.filter(prod=>prod.idCategory==idCategory)
                setProducts(filteredByIdCategory)
                console.log('products', products)
            }


        }
        getDataCat();
    }, [idCategory])



//Utilizado en caso de no emplear FireBase

// const [products, setProducts] = useState([])
// const {idCategory} = useParams();

// useEffect(()=>{
//     const promise = obtenerProductos()
//     promise.then(json => {setProducts(json)})
// }, [products, idCategory])

// const obtenerProductos = () =>{
//     const promise = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             if(idCategory){
//                 const filteredByCategory = Productos.filter(prod=>prod.idCategory==idCategory)
//                 resolve(filteredByCategory)}
//             else{
//                 resolve(Productos)}
//         }, 2000);
//     })
//     return promise



return (
    <>

    <div className="bienvenida">
        <h1> {title} </h1>
    </div>


    {   
    products?
        <div className="itemListContainer">
        <ItemList productsList={products}/>
        </div>

        :
        <div className="loader">
            <Loader type={"balls"} color= {"#0D6EFD"} />
        </div>
    }

    </>
)
}

