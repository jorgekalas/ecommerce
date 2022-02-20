import React from 'react';
import logo from '../../assets/logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'


export function NavBar() {


    return<>

<nav>

<div>

        <Link to={`/`}>
                <div className="logoYNombre">         
                    <img src={logo}/>
                    <h1>Electroland</h1>
                </div>
        </Link>

</div>

<div class="categorias">
    <ul>
        <Link to={`/category/1`}>Celulares</Link>
        <Link to={`/category/2`}>SmartTV</Link>
        <Link to={`/category/3`}>Tablets</Link>
        <Link to={`/category/4`}>Electrodomésticos</Link>
        <Link to={`/category/5`}>Accesorios</Link>   
    </ul>
</div>

<div class="carrito">
    <CartWidget/>
</div>
</nav>
    </>
}
