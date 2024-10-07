import Image from "next/image";
import "../../(layout)/style.css"
import HeroLogo from "../../images/hero-logo.svg"
const Blog = () => {
  return (
    <div className="hero-bg flex flex-col">
      <Image src={HeroLogo} alt="Hero Logo" width={77} height={77}/>
      <h2 className="font-medium text-[48px] leading-[72px]">Blog</h2>
      <h3 className="font-medium text-[20px] leading-[24px]">Home  <span className="font-light text-[20px] leading-[24px]">Blog</span></h3>
    </div>
  )
};

export default Blog;
