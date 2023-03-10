import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

import Checkout from "./components/Checkout/Index";
import ProductContext from "./context/ProductContex";
import CreateProduct from "./screens/CreateProduct";
import ProductPage from "./screens/ProductPage";

import "./styles/styles.css";
import { useEffect, useState } from "react";
import ProductList from "./screens/ProductList";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCs78rDIPslrmwbwkYspJWlFkN7BVVD4jQ",
  authDomain: "empred-f6e8f.firebaseapp.com",
  projectId: "empred-f6e8f",
});

const db = getFirestore(firebaseApp);

function App() {
  const [dataProducts, setDataProducts] = useState<any>();

  useEffect(() => {
    GetProducts();
  }, []);

  async function GetProducts() {
    const userCollectionRed = collection(db, "products");
    const data = await getDocs(userCollectionRed);

    setDataProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  if (dataProducts) {
    console.log(dataProducts);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/createProduct" element={<CreateProduct />} />
        {dataProducts &&
          dataProducts.map((item: any) => {
            return (
              <Route
                path={"/product/" + item.linkUrl}
                element={
                  <ProductPage
                    imageUrl={item.imageUrl}
                    productName={item.productName}
                    previousPrice={item.previousPrice}
                    price={item.price}
                    productInfo={item.productInfo}
                    parcel6x={item.parcel6x}
                    parcel12x={item.parcel12x}
                  />
                }
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
