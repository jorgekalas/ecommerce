import React, {createContext, useState, useContext} from 'react';


//creación del context
export const CartContext = createContext();


//atajo para importar
export const useCartContext = () => {
useContext(CartContext)
}


//provider
export const CartProvider = ({children}) =>{


    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)


    const addItem = (item, amount) =>{
        if (isInCart(item.itemId)){
                const newCart = [...cartItems]
                for (const itemCompare of newCart) {
                    if (itemCompare.item.itemId === item.itemId) {
                        itemCompare.amount = itemCompare.amount + amount
                    }
                }
                setCartItems(newCart)
    
            } else {
                setCartItems([...cartItems, { item: item, amount: amount }])
            }
        }

    const modifyCartQuantity=(amount) => {
        setCartCount(amount);
    }

    const cartCounter=() =>{
        let total = 0;
        cartItems.forEach((product) => (total += product.am));
    
        return total;
      }

    const removeItem = (itemId) => {

        let newCart = cartItems.filter(product=> product.itemId !== itemId)
        setCartItems(newCart)

    }

    const clear = () => {
        setCartItems = []
        setCartCount = 0;
    }

    const isInCart = (itemId)=>{
        return cartItems.find(product => product.item.itemId === itemId)

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
    <CartContext.Provider 
    value={{
        cartCount, 
        cartItems,
        addItem, 
        removeItem, 
        clear, 
        isInCart, 
        cartCounter,
        modifyCartQuantity 
        }}>
        {children}
    </CartContext.Provider>
)

}