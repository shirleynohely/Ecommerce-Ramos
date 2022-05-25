import { useState } from "react"

const ItemCount = ({initial, stock, onAdd }) =>{

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
    <div class="input-group d-flex justify-content-center">
        <div class="input-group-btn">
            <button type="button" class="btn btn-light" onClick={decrement}>-</button>
        </div>
        <h4>{value}</h4>
        <div class="input-group-btn">
            
            <button type="button" class="btn btn-light" onClick={increment}>+</button>
        </div>
        <div class="input-group-btn">
        <button className="btn btn-light bg-gradient" onClick={() => onAdd(value)}>Agregar al carrito </button>
        </div>
    </div>
    )  
}
export default ItemCount