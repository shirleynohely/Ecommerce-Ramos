import './Item.css';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, title, price, pictureUrl, stock}) =>{

return (
    <div class="card">
        <img src={pictureUrl} class="card-img-top" alt="" />
        <div class="card-body">
            <h5>{title}</h5>
            <p>$<span>{price}</span></p>
        </div>
        <div>
            <ItemCount initial={1} stock={stock} />
        </div>
    </div>   
)
}
export default Item