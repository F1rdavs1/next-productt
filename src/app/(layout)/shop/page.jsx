import Image from "next/image";
import React from "react";
import ShopImg from "../../images/shop.png"
const Shop = () => {
  return (
    <Image src={ShopImg} alt="Image" className="w-screen"/>
  )
};

export default Shop;
