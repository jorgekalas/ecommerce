
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Success.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'



export const Success = () => {


    const {clear} = useContext(CartContext);

    return(
        <div className="successContainer">
        <h1>¡Tu compra fue registrada con éxito!</h1>
        <Link to={'/'}>
        <Button onClick={clear}>Volver</Button>
        </Link>

        </div>
    )
}