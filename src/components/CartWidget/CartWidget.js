import './CartWidget.css'
import {ItemCount} from '../ItemCount/ItemCount'
import {useState} from 'react'
import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext'
import {useCartContext} from '../../context/CartContext'

export const CartWidget =  () =>{
    
    const cartCount = useCartContext();


    return(
        <>
            <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png" alt="carrito"/>
            <span>cant: {cartCount}</span>
        </>
    )
}
