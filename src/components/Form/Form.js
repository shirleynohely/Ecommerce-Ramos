import "./Form.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ErrorMessage } from "@hookform/error-message";

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
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
    address: "",
  });
  const { cart, total, getQuantity, removeAll } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //objeto con información del cliente y su orden de compra

  const createOrder = () => {
    setLoading(true);

    const objOrder = {
      form,
      products: cart,
      total: total(),
      items: getQuantity(),
      date: new Date(),
    };

    const cartIds = cart.map((prod) => prod.id);

    const batch = writeBatch(db);

    const outOfStock = [];

    //  Referencia de la colección de productos y órdenes en Firebase

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
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out-of-stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        const orderId = id;
        removeAll();
        toast.success("La compra se ha realizado correctamente", {
          style: {
            borderRadius: "10px",
            background: "#000000",
            color: "#fff",
          },
        });
        return setOrderId(orderId);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se puede realizar la compra, algunos productos no cuentan con stock",
          {
            style: {
              borderRadius: "10px",
              background: "#000000",
              color: "#fff",
            },
          }
        );
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
          <h5>¡Muchas gracias por su compra!</h5>
          <p>
            El número de orden de su compra es:<span>{orderId}</span>
          </p>
          <div className="btnInicio">
            <Link to={`/`} type="button" className="btn btn-outline-dark">
              Volver al inicio
            </Link>
          </div>
        </>
      ) : (
        <>
          <h5 className="title-confirm">
            Ingrese sus datos para confirmar la compra
          </h5>
          <form
            className="form"
            onSubmit={handleSubmit(createOrder)}
            onChange={handleChange}
          >
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Ingrese nombre"
                value={form.name}
                {...register("name", { required: "El campo es requerido" })}
              />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Ingrese email"
                value={form.email}
                {...register("email", { required: "El campo es requerido" })}
              />
              {}
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Confirmar email"
                value={form.emailConfirm}
                {...register("emailConfirm", {
                  required: "El campo es requerido",
                })}
              />
              {form.emailConfirm !== form.email && (
                <p>Los emails no coinciden</p>
              )}
              <ErrorMessage
                errors={errors}
                name="emailConfirm"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                placeholder="Ingrese teléfono"
                value={form.phone}
                {...register("phone", { required: "El campo es requerido" })}
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Ingrese dirección"
                value={form.address}
                {...register("address", { required: "El campo es requerido" })}
              />

              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => <p>{message}</p>}
              />
            </div>

            <div className="btncompra">
              <button
                type="submit"
                className="btn btn-outline-dark"
                disabled={form.email !== form.emailConfirm || cart.length === 0}
              >
                Realizar compra
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
