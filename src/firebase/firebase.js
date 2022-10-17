import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeTA0_QExb52WfWh8nFN9hiVdHTUaTBqo",
  authDomain: "fraus-ecommerce.firebaseapp.com",
  projectId: "fraus-ecommerce",
  storageBucket: "fraus-ecommerce.appspot.com",
  messagingSenderId: "72228372155",
  appId: "1:72228372155:web:c90cabda6f9d787477b39e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/*---------------------------------------------------------------------*/

export const DB_COLLECTIONS = ["products", "sells", "categories", "buying"];
