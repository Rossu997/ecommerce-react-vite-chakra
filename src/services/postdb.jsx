import api from "./api";
import { db, DB_COLLECTIONS } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

(async () => {
  try {
    const dbCollection = collection(db, DB_COLLECTIONS[0]);
    const apiData = await api.getAllProducts();
    const dataComplete = apiData.map((product) => {
      return {
        title: product.title,
        image: product.image,
        category: product.category,
        description: product.description,
        price: product.price,
        rating: product.rating,
        bestSeller: false,
        freeShipping: false,
        discount: 0,
        stock: 200,
      };
    });
    dataComplete.forEach((element) => {
      addDoc(dbCollection, { ...element });
    });
  } catch (error) {
    setError(true);
    console.log(error);
  }
})();

const postdb = () => {
  return <div>postdb</div>;
};

export default postdb;
