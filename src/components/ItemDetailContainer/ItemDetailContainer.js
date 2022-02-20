import './ItemDetailContainer.css'
import {Productos} from '../../data/data'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [itemDetailCont, setItemDetailCont] = useState([])
    
    const {idItem} = useParams ();

    
    useEffect(()=>{
        const promise = getItems()
        promise.then(json => {setItemDetailCont(json)})
    }, [itemDetailCont, idItem])

    const getItems = () =>{
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{ // original: resolve(Productos)
                const filteredById = Productos.filter(prod=>prod.id==idItem)
                resolve(filteredById)

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