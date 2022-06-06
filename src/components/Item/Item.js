import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({id, title, price, pictureUrl}) =>{

return (
    <div className="card">
        <img src={pictureUrl} className="card-img-top" alt="" />
        <div className="card-body1">
            <h5>{title}</h5>
            <p>${price}</p>
        </div>
        
        <div className="btn-infor">
        <Link type="button" className="btn btn-outline-dark" to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    </div>   

)
}
export default Item