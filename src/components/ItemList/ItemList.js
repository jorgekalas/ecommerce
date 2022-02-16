import {useEffect} from 'react'
import {useState} from 'react'
import './ItemList.css'
import Container from 'react-bootstrap/Container'
import {Item} from '../Item/Item'


export const ItemList = ({productsList}) =>{


return (
    <>

    <Container className="mt-5 itemListContainer">

    { productsList && productsList.map((p) =>{
        return(
        <Item product={p}/>
        )
    })
}

    </Container>

    </>
)
}

