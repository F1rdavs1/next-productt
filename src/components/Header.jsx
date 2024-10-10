import React from "react";
import HeaderLogo from "../app/images/header-logo.svg";
import Avatar from "../app/images/avatar.svg";
import Search from "../app/images/search.svg";
import Like from "../app/images/like.svg";
import Basket from "../app/images/basket.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center w-[1440px] ml-[54px] py-[30px]">
        <Link href="/">
          <Image
            src={HeaderLogo}
            alt="Header Logo"
            width={185}
            height={41}
            className="cursor-pointer"
          />
        </Link>
        <div className="space-x-[75px] ml-[266px]">
          <Link href={"/"} className="font-medium text-[16px] leading-[24px]">
            Home
          </Link>
          <Link
            href={"/shop"}
            className="font-medium text-[16px] leading-[24px]"
          >
            Shop
          </Link>
          <Link
            href={"/contact"}
            className="font-medium text-[16px] leading-[24px]"
          >
            Bu Contact
          </Link>
          <Link
            href={"/blog"}
            className="font-medium text-[16px] leading-[24px]"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center space-x-[45px] ml-[158px]">
          <Image src={Avatar} alt="Image" className="cursor-pointer" />
          <Image src={Search} alt="Image" className="cursor-pointer" />
          <Image src={Like} alt="Image" className="cursor-pointer" />
          <Image src={Basket} alt="Image" className="cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Header;
