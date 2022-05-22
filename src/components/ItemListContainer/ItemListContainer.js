

import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = (props) =>{
    return (<><h1 class="display-1">{props.greeting} </h1><ItemCount initial={1} stock={3} /></>
    
    )
    
}


export default ItemListContainer