import React from "react";
import ContactImg from "../../images/contact.png"
import Image from "next/image";
const Contact = () => {
  return (
    <Image src={ContactImg} alt="Image" className="w-screen"/>
  )
};

export default Contact;
