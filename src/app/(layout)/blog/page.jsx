import Image from "next/image";
import React from "react";
import BlogImg from "../../images/blog.png"
const Blog = () => {
  return (
    <Image src={BlogImg} alt="Image" className="w-screen"/>
  )
};

export default Blog;
