import Image from "next/image";
import HomeImg from './../images/Home-img.png'


export default function Home() {
  return (
    <>
    <Image src={HomeImg} alt="Home image" className="w-screen object-cover"/>
    </>
  )
}
