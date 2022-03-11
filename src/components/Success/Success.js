
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Success.css'


export const Success = () => {

    return(
        <div className="successContainer">
        <h1>¡Tu compra fue registrada con éxito!</h1>
        <Link to={'/'}>
        <Button>Volver</Button>
        </Link>

        </div>
    )
}