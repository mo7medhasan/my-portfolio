import React, { useState } from "react";
import { styles } from "@/styles";
import { navLinks } from "@/constants";
import { logo, menu, close } from "@/assets";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
const [active, setActive] = useState('')

  return (
    <nav
      className={`${styles.paddingX} flex w-full  items-center py-5 fixed top-0 z-20 bg-primary     `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            mo7med <span className=" hidden sm:block">
             |
              Frontend developer
            </span>
          </p>
  
        </Link>


<ul className="list-none hidden sm:flex flex-row gap-10" >
{navLinks.map(link=>(<li key={link.id} 
onClick={()=>setActive(link.title)}
className={`${active===link.title?"text-white ":" text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
  <Link href={`#${link.id}`}>{link.title}</Link>
</li>))}



</ul>

      </div>
    </nav>
  );
};

export default Navbar;
