import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({id, title, price, pictureUrl}) =>{

return (
    <div class="card">
        <img src={pictureUrl} class="card-img-top" alt="" />
        <div class="card-body1">
            <h5>{title}</h5>
            <p>$<span>{price}</span></p>
        </div>
        
        <div class="btn-infor">
        <Link type="button" class="btn btn-outline-dark" to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    </div>   

)
}
export default Item