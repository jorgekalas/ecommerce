import './ItemList.css'
import Container from 'react-bootstrap/Container'
import {Item} from '../Item/Item'




export const ItemList = ({productsList}) =>{


    
    return (
        <>

{!!productsList.length? 


            <Container className="mt-5 itemList">

            { productsList.map((p) =>{
                return(

                            <Item product={p}/>

                )
            })
        }
            </Container>


    :

    <p>Cargando...</p> 

    }
    </>
)}


