import { db } from ".";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collRef)
      .then((res) => {
        const products = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        resolve(products);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((res) => {
        const product = { id: res.id, ...res.data() };
        resolve(product);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
