import "./Form.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";

const Form = () => {
  const { register } = useForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { cart, total, getQuantity, removeAll } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const CreateOrder = () => {
    setLoading(true);

    const ObjOrder = {
      form,
      products: cart,
      total: total(),
      quantity: getQuantity(),
      date: new Date(),
    };

    const cartIds = cart.map((prod) => prod.id);

    const batch = writeBatch(db);

    const outOfStock = [];

    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", cartIds)))
      .then((res) => {
        res.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find(
            (prod) => prod.id === doc.id
          )?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, ObjOrder);
        } else {
          return Promise.reject({ type: "out-of-stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        const orderId = id;
        removeAll();
        return setOrderId(orderId);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <h5>Su orden se está generando</h5>
      ) : orderId ? (
        <>
          <h5>La compra ha finalizado correctamente</h5>
          <p>El número de orden de su compra es {orderId}</p>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              {...register("name", { required: true })}
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              {...register("email", { required: true })}
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              {...register("phone", { required: true })}
              onChange={handleChange}
              value={form.phone}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              className="form-control"
              type="text"
              name="address"
              {...register("address", { required: true })}
              onChange={handleChange}
              value={form.address}
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={() => CreateOrder()}
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};
export default Form;
