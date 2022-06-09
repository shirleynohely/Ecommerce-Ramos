import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({initial = 1, stock, onAdd }) =>{

const [value,setValue] = useState(initial)

const increment = ()=>{
    if (value < stock){
        setValue(value + 1)
    } 
        
}

const decrement = ()=>{
    if (value > initial) {
        setValue(value - 1)
      }

}

    return (
    <div className="input-group d-flex justify-content-center">
        <div className="input-group-btn">
            <button type="button" className="btn btn-light" onClick={decrement}>-</button>
        </div>
        <span>{value}</span>
        <div className="input-group-btn">
            
            <button type="button" className="btn btn-light" onClick={increment}>+</button>
        </div>
        <div className="input-group-btn">
        <button className="btn btn-light bg-gradient" onClick={() => onAdd(value)}>Agregar al carrito </button>
        </div>
    </div>
    )  
}
export default ItemCount