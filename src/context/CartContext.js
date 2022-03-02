import React, {createContext, useState, useContext} from 'react';


//creación del context
export const CartContext = createContext([]);


//atajo para importar
export const useCartContext = () => {
useContext(CartContext)
}


//provider
export const CartProvider = ({children}) =>{


    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    const addItem = (item) =>{
        if (!isInCart()){
            cartItems.append(item)
        }
    }

    const modifyCartQuantity=(amount) => {
        setCartQuantity(amount);
    }

    const cartCounter=() =>{
        let total = 0;
        cartItems.forEach((product) => (total += product.am));
    
        return total;
      }

    const deleteItem = (item) => {

        let newCart = cartItems.filter(product=> product.id !== item.id)
        setCartItems(newCart)

    }

    const clear = () => {
        setCartItems = []
        setCartCount = 0;
    }

    const isInCart = (item, amount)=>{

        if (cartItems.some(product => product.id === item.id)) {
            let newCart = [...cartItems];
      
            let repeated = newCart.find(product => product.id === item.id);
      
            repeated.am += amount;
      
            setCartItems(newCart);
          } else {
            setCartItems([...cartItems, item]);
          }

    }

    // const addItem = (item, amount) =>{
    //     if(cartItems.some(product => product.id === item.id)){
    //         const copy =  [...cartItems]
    //         const repeatItemIndex = cartItems.findIndex(product => product.id === item.id )
    //         copy[repeatItemIndex] = {
    //             ...copy[repeatItemIndex],
    //             amount: copy[repeatItemIndex].amount + amount
    //         }
            
    //         setCartItems(copy)
    //         setCartCount((prev) => prev + amount)

    //     } else {
    //         setCartItems([...cartItems, { ...item, amount}])
    //         setCartCount((prev) => prev + amount)
    //     }
    // }

return(
    <CartContext.Provider value={{cartCount, cartItems, addItem, deleteItem, clear, isInCart, cartCounter, cartQuantity, modifyCartQuantity}}>
        {children}
    </CartContext.Provider>
)

}