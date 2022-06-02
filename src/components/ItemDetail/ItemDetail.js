import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({
  pictureUrl,
  title,
  price,
  stock,
  description,
  category,
}) => {
  return (
    <>
      {" "}
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={pictureUrl} class="img-fluid rounded-start" alt="" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">${price}</p>
              <p class="card-text">Hay {stock} disponibles</p>
              <p class="card-text">Categoría: {category}</p>
              <div class="item-count">
                <ItemCount initial={1} stock={stock} />
              </div>
              <div class="btn-back">
                <Link to={`/`} type="button" class="btn btn-outline-dark">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
