import './ItemDetailContainer.css'
import {Productos} from '../../data/data'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'


export const ItemDetailContainer = () => {

    const [itemDetailCont, setItemDetailCont] = useState([])
    
    
    useEffect(()=>{
        const promise = getItems()
        promise.then(json => {setItemDetailCont(json)})
    }, [itemDetailCont])
    
    const getItems = () =>{
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(Productos)
            }, 2000)
        })

        return promise
    }
    
    
    return ( 
        <div>

        {!!itemDetailCont.length? 

        
            <Container className="mt-5 itemDetailContainer">
                        {itemDetailCont.map((product)=>{
                    return(
                        <ItemDetail item={product}/>
                    )
                    })
                }
                
            </Container>
            :
            <p>Cargando...</p> 
        
            }
        </div>
        )
    }