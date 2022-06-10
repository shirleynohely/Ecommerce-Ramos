import { useContext } from "react";
import  CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, removeAll } = useContext(CartContext);

  return (
    <>
        <div>
            {cart.length > 0 && (
                    <div>
                        {cart.map(prod => (
                                <div key={prod.id}>
                                <div><img src={prod.pictureUrl} alt=" "/></div>
                                <div>{prod.title}</div>
                                <div>{prod.quantity}</div>
                                <div>{prod.price}</div>
                                <div>{prod.quantity * prod.price}</div>
                                <button onClick={() => removeItem(prod.id)} className="btn btn-outline-danger">Eliminar</button>
                                </div>
                        ))}
                        <div><button onClick={removeAll} className="btn btn-outline-dark">Vaciar Carrito</button></div>
                    </div>                  
            )}
               {cart.length === 0 && (
          <h1>No hay productos en el carrito</h1>
            )}
        </div> 
    </>

  )
}

  export default Cart;
