import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'


export const ItemListContainer = ({title}) => {

return (
    <>

    <div className="bienvenida">
        <h1> {title} </h1>
    </div>

    <ItemList/>

    </>
)
}

