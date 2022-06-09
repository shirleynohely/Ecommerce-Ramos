import { useState, createContext } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.quantity
        })
        setTotalProductsAdded(accu)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }
    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }
    const removeAll=(id)=>{
        setCart([])
    }

    return (
       <CartContext.Provider value={{cart, totalProductsAdded, addItem, getQuantity, getProduct, removeItem, removeAll}}>
           {children}
       </CartContext.Provider>
    )
}
export default CartContextProvider;