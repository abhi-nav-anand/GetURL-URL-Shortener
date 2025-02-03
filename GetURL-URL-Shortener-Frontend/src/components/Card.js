import React from "react";
import "./Card.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Card() {
  return (
    <div className="cardStyle animate__animated animate__fadeIn animate__fast">
      <Header/>
      <Footer/>
    </div>
  );
}
