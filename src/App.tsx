import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Body from "./components/Carrosel";

import Checkout from "./components/Checkout/Index";

import Header from "./components/Header";

import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Body
              Titulo={"Barbeado elétrico"}
              antPrice={"99,90"}
              newPrice={"49,90"}
              parcelas={"16,99"}
              economiade={"61"}
            />
          }
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
