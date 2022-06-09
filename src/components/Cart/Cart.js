import { useContext } from "react";
import  CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, removeAll } = useContext(CartContext);

  return (
    <div>
        <h1>Carrito de compras</h1>
        <div>
                {cart.map(prod => {
                    return(
                        <><>
                            <div className="container">
                                <div className="row mt-3 tabla justify-content-center text-center">
                                    <div className="col-lg-3 col-sm-2"></div>
                                    <h5 className="col-lg-4 col-sm-2">Producto</h5>
                                    <h5 className="col-lg-1 col-sm-2">Precio</h5>
                                    <h5 className="col-lg-1 col-sm-2">Cantidad</h5>
                                    <h5 className="col-lg-2 col-sm-2">Subtotal</h5>
                                    <div className="col-lg-1 col-sm-2"></div>
                                </div>
                                <hr></hr>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tr>
                                            <td key={prod.id}></td>
                                            <td>{prod.title}</td>
                                            <td>{prod.price}</td>
                                            <td>{prod.quantity}</td>
                                            <td>${prod.price * prod.quantity}</td>
                                            <button onClick={() => removeItem(prod.id)} className="btn btn-outline-danger">Eliminar</button>
                                        </tr>

                                    </table>
                                </div>
                            </div></><button onClick={removeAll} className="btn btn-outline-dark">Vaciar Carrito</button></>
                    )}
                   
                    ) }
                
    </div>
    
</div>
)}
export default Cart;
