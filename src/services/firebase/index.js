import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0elhORdwR5hd-V_TwbXa1xDYmR79aabk",
  authDomain: "ecommerce-aleh.firebaseapp.com",
  projectId: "ecommerce-aleh",
  storageBucket: "ecommerce-aleh.appspot.com",
  messagingSenderId: "453578042199",
  appId: "1:453578042199:web:15a325e89b070292582c12"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);