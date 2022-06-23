import "./Form.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import Loader from "../Loader/Loader";
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
  const { register, handleSubmit, formState: errors} = useForm();

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

  const onSubmit = (e) => {
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
        <>
        <h5>Su orden se está generando</h5>
        <Loader />
        </>
      ) : orderId ? (
        <>
          <h5>La compra ha finalizado correctamente</h5>
          <p>El número de orden de su compra es {orderId}</p>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Ingrese nombre"
              onChange={handleChange}
              value={form.name}
              {...register("name", { required: {value: true, message: "El campo es requerido"} })} 
            />
            {errors?.name?.message}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Ingrese email" 
              onChange={handleChange}
              value={form.email}
              {...register("email", { required: {value: true, message:"El campo es requerido" } })}
            />
             {errors?.email?.message}
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              className="form-control"
              type="number"
              name="phone"
              placeholder="Ingrese teléfono" 
              onChange={handleChange}
              value={form.phone}
              {...register("phone", { required: {value: true, message:"El campo es requerido" } })}
              
            />
            {errors?.phone?.message}
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="Ingrese dirección" 
              onChange={handleChange}
              value={form.address}
              {...register("address", { required: {value: true, message:"El campo es requerido" } })}
              
            />
             {errors?.address?.message}
          </div>

          <div>
            <button
              type="button"
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
