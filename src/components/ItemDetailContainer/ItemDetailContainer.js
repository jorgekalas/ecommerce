import './ItemDetailContainer.css'
import {Productos} from '../../data/data'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'

export const ItemDetailContainer = () => {

    const [itemDetailCont, setItemDetailCont] = useState([])
    
    const {idItem} = useParams ();

    
    useEffect(()=>{
        const promise = getItems()
        promise.then(json => {setItemDetailCont(json)})
    }, [itemDetailCont, idItem])

    const getItems = () =>{
        const promise = new Promise((resolve,reject) =>{
            const filteredById = Productos.filter(prod=>prod.id==idItem)
            setTimeout(()=>{ // original: resolve(Productos)
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

            <div className="loader">
                <Loader type={"balls"} color= {"#0D6EFD"} />
            </div>
            }
        </div>
        )
    }