import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { BoxInput, Button, Container, Input, Label } from "./styles";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCs78rDIPslrmwbwkYspJWlFkN7BVVD4jQ",
  authDomain: "empred-f6e8f.firebaseapp.com",
  projectId: "empred-f6e8f",
});

type MyStateType = null | undefined | {};

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [price, setPrice] = useState("");
  const [previousPrice, setPreviousPrice] = useState("");
  const [parcel6x, setParcel6x] = useState("");
  const [parcel12x, setParcel12x] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const [formValues, setFormValues] = useState<MyStateType>(null);

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    createProduct();
  }, [formValues]);

  function handleSubmit(event: any) {
    event.preventDefault();
    setFormValues({
      productName: productName,
      imageUrl: imageUrl,
      productInfo: productInfo,
      price: price,
      previousPrice: previousPrice,
      parcel6x: parcel6x,
      parcel12x: parcel12x,
      linkUrl: linkUrl,
    });
    console.log(formValues);
  }
  async function createProduct() {
    if (formValues) {
      const userCollectionRed = collection(db, "products");
      const card = await addDoc(userCollectionRed, formValues);
      console.log(card);
      alert("Produto Criado com sucesso !");
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <BoxInput>
          <Label>Nome do Produto</Label>
          <Input
            value={productName}
            onChange={({ target }: any) => {
              setProductName(target.value);
            }}
            required
          />
        </BoxInput>
        <BoxInput>
          <Label>Url da imagem</Label>
          <Input
            value={imageUrl}
            onChange={({ target }: any) => {
              setImageUrl(target.value);
            }}
            required
          />
        </BoxInput>
        <BoxInput>
          <Label>Informações do produto</Label>
          <Input
            value={productInfo}
            onChange={({ target }: any) => {
              setProductInfo(target.value);
            }}
            required
          />
        </BoxInput>
        <div style={{ display: "flex ", gap: "2rem" }}>
          <BoxInput>
            <Label>Preço</Label>
            <Input
              value={price}
              onChange={({ target }: any) => {
                setPrice(target.value);
              }}
              required
            />
          </BoxInput>
          <BoxInput>
            <Label>Preço anterior</Label>
            <Input
              value={previousPrice}
              onChange={({ target }: any) => {
                setPreviousPrice(target.value);
              }}
              required
            />
          </BoxInput>
        </div>
        <div style={{ display: "flex ", gap: "2rem" }}>
          <BoxInput>
            <Label>Parcela 6x</Label>
            <Input
              value={parcel6x}
              onChange={({ target }: any) => {
                setParcel6x(target.value);
              }}
              required
            />
          </BoxInput>
          <BoxInput>
            <Label>Parcela 12x</Label>
            <Input
              value={parcel12x}
              onChange={({ target }: any) => {
                setParcel12x(target.value);
              }}
              required
            />
          </BoxInput>
        </div>
        <BoxInput>
          <Label>Link da url</Label>
          <Input
            value={linkUrl}
            onChange={({ target }: any) => {
              setLinkUrl(target.value);
            }}
            required
          />
        </BoxInput>
        <Button>Enviar</Button>
      </div>
    </Container>
  );
}
