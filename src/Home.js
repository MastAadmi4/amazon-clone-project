import React from "react";
import "./Home.css";
import Product from "./Product";
import { AnimationWrapper } from 'react-hover-animation'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="img"
        />
        <div className="home__row">
          <Product
            id = "1"
            title="INFLUENCE: The pshychology of persuasion"
            price={450}
            image="https://th.bing.com/th/id/OIP.1gh0sSY3zkgf6JRA6iZL3QHaLX?pid=ImgDet&rs=1"
            rating={5}
          />
          <Product
          id = "2"
            title="MOKOBARA Luggage Polycarbonate Hardsided Suitcase Trolley (Float Cabin 55 cms, Million Dollar Premium Texture)"
            price={7249}
            image="https://images-eu.ssl-images-amazon.com/images/I/416AZHEY-SL._AC_SR400,600_.jpg"
            rating={4}
          />
          {/*produc*/}
        </div>
        <div className="home__row">
          <Product
          id = "3"
            title="boAt NIRVANAA 751ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Mic,with Up to 65H Playtime,ASAP Charge, Dual Compatibility,Carry Pouch(Silver Sterling) "
            price={2499}
            image="https://m.media-amazon.com/images/I/61PCjNryx2L._SX522_.jpg"
            rating={5}
          />
          <Product
          id = "4"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
            price={119999}
            image="https://images-eu.ssl-images-amazon.com/images/I/313CFbI-YjL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
          id = "5"
            title="Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)"
            price={35499}
            image="https://m.media-amazon.com/images/I/8131pwAojZL._SX522_.jpg"
            rating={5}
            
          />
        </div>
        <div className="home__row">
          <Product
          id = "6"
            title=" Samsung 123.9cm (49inch) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
            price={149999}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Aug_22/Aug-ART/GW-editorial_1150x323._CB630786187_.jpg"></img>
      </div>
      <div className="home__row">
          <Product
          id = "7"
            title=" JUGULAR Men's Cotton Hooded Sweatshirt"
            price={1499}
            image="https://m.media-amazon.com/images/I/61S7cx84D-L._AC_UL320_.jpg"
            rating={4}
          />

           <Product
            id = "8"
            title=" Qube By Fort Collins Men Sweatshirt"
            price={1299}
            image="https://m.media-amazon.com/images/I/81-NdhLQgML._AC_UL320_.jpg"
            rating={5}
          />

            <Product
            id = "9"
            title=" LEOTUDE Men's Cotton Round Neck Sweatshirt"
            price={999}
            image="https://m.media-amazon.com/images/I/41RN1pSoyBL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
          id = "10"
            title=" Nike Jordan Mens Jordan Low Green Toe"
            price={14999}
            image="https://m.media-amazon.com/images/I/61lMMbd8GcL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
          id = "11"
            title=" Nike Men's Air Jordan 1 Low Leather Sneaker"
            price={17999}
            image="https://m.media-amazon.com/images/I/617QbIOWcWL._AC_UL320_.jpg"
            rating={5}
          />
          
        </div>
      </div>
      
    </div>
  );
}

export default Home;
