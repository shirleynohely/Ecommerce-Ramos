import { useContext } from "react";
import  CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, removeAll, total } = useContext(CartContext);

  return (
    <>
        <div>
            {cart.length > 0 && (
                    <div>
                        {cart.map(prod => (
                                <div key={prod.id}>
                                <div>
                                <img src={prod.pictureUrl} alt={prod.title}/>
                                </div> 
                                <div>Producto: {prod.title}</div>
                                <div>Cantidad: {prod.quantity}</div>
                                <div>Precio: ${prod.price}</div>
                                <div>Subtotal: ${prod.quantity * prod.price}</div>
                                <button onClick={() => removeItem(prod.id)} className="btn btn-outline-danger">Eliminar</button>
                               
                                </div>
                        ))}
                         <div>Total: ${total()}</div>
                        <div><button onClick={removeAll} className="btn btn-outline-dark">Vaciar Carrito</button></div>
                        <div><button className="btn btn-outline-dark">Terminar compra</button></div>
                        
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
