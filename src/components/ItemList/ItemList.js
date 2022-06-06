import Item from "../Item/Item";

const ItemList = ({products}) =>{

return (

    <div className="template-card">
        {products.map(product => <Item key={product.id} {...product} />)}
    </div>
)
    
}
export default ItemList