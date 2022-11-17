import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, DB_COLLECTIONS } from "../firebase/firebase";

/*---------------------------------------------------------------------*/

export default {
  getProducts: async (categoryName = false) => {
    const dbCollection = collection(db, DB_COLLECTIONS[0]);
    let toGet = dbCollection;
    if (categoryName) {
      toGet = query(dbCollection, where("category", "==", categoryName));
    }

    try {
      const data = await getDocs(toGet);
      const dbProducts = data.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      return dbProducts;
    } catch (error) {
      console.log(error);
    }
  },
  getSingleProduct: async (idProduct) => {
    const dbCollection = collection(db, DB_COLLECTIONS[0]);
    const dbDoc = doc(dbCollection, idProduct);

    try {
      const data = await getDoc(dbDoc);
      const dbSingleProduct = {
        id: data.id,
        ...data.data(),
      };
      return dbSingleProduct;
    } catch (error) {
      console.log(error);
    }
  },
  getCategories: async () => {
    const dbCollection = collection(db, DB_COLLECTIONS[2]);

    try {
      const data = await getDocs(dbCollection);
      const dbCategories = data.docs.map((category) => {
        return category.data().name;
      });
      return dbCategories;
    } catch (error) {
      console.log(error);
    }
  },
  postSell: async (clientData, cart, totalPrice) => {
    const dbCollection = collection(db, DB_COLLECTIONS[1]);

    try {
      const post = await addDoc(dbCollection, {
        client: clientData,
        items: cart,
        time: serverTimestamp(),
        total: totalPrice,
      });
      return post.id;
    } catch (error) {
      console.log(error);
    }
  },
  updateStock: async (item, dbProduct) => {
    const docRef = doc(db, DB_COLLECTIONS[0], item.id);

    try {
      updateDoc(docRef, { stock: dbProduct.stock - item.quantity });
    } catch (error) {
      console.log(error);
    }
  },
};
