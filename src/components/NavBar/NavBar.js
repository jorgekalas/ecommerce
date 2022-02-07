import React from 'react';
import logo from '../../assets/logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import './NavBar.css'

export function NavBar() {
    return<>

<nav>

<div class="logoYNombre">
    <a href="../index.html">
        <img src={logo}/>
    </a>
    <a href="../index.html">
        <h1>Electroland</h1>
    </a>
</div>

<div class="categorias">
    <ul>
        <a href="#"><li>Celulares</li></a>
        <a href="#"><li>SmartTV</li></a>
        <a href="#"><li>Tablets</li></a>
        <a href="#"><li>Electrodomésticos</li></a>
        <a href="#"><li>Accesorios</li></a>    
    </ul>
</div>

<div class="carrito">
    <CartWidget/>
</div>
</nav>
    </>
}
