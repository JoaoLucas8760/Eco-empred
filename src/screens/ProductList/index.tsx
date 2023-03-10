import React, { useEffect, useState } from "react";
import {
  Container,
  Product,
  ProductImage,
  ProductName,
  ProductsContainer,
  Text,
} from "./styles";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCs78rDIPslrmwbwkYspJWlFkN7BVVD4jQ",
  authDomain: "empred-f6e8f.firebaseapp.com",
  projectId: "empred-f6e8f",
});

const db = getFirestore(firebaseApp);

export default function ProductList() {
  const [dataProducts, setDataProducts] = useState<any>();

  const navigate = useNavigate();

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
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text>Meus Produtos</Text>
        <Text
          onClick={() => navigate("/createProduct")}
          style={{ cursor: "pointer" }}
        >
          Criar produto
        </Text>
      </div>

      <ProductsContainer>
        {dataProducts?.map((item: any) => {
          return (
            <Product
              onClick={() => navigate(`/product/${item.linkUrl}`)}
              style={{ display: "flex" }}
            >
              <ProductImage>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={item.imageUrl}
                  alt=""
                />
              </ProductImage>

              <ProductName>{item.productName}</ProductName>
            </Product>
          );
        })}
      </ProductsContainer>
    </Container>
  );
}
