import React from "react";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import Link from "next/link";
import { NAV_LINKS } from "@/public/utils/constants";
import ButtonComponent from "../buttoncomponent/ButtonComponent";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-2xl flex justify-center items-center">
      <div className="flex justify-between items-center w-[90%] xl:w-[70%]">
        {/* Logo */}
        <Link href="/" className="flex items-center p-4">
          <Image src={LogoImage} alt="Logo" width={70} height={70} priority />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center justify-even gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative">
              <Link
                href={link.path}
                className="text-black transition duration-300 ease-in-out group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-700 transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Future Get Started Button */}
        <div className="">
          <ButtonComponent href="/get-started">
            Get Started
          </ButtonComponent>
        </div>
      </div>
    </nav>
  );
}
