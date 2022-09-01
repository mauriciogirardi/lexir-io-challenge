import Image from "next/image";
import logoSvg from "@assets/logo.svg";
import { ActiveLink } from "./ActiveLink";
import { Handbag, UserCircle } from "phosphor-react";
import Link from "next/link";

export const Header = () => {
  const active = "font-bold text-green-600 ";
  return (
    <div className="border-b-2 ">
      <header className="flex h-24 justify-between items-center px-4 w-[1280px] mx-auto">
        <Link href="/">
          <a>
            <Image
              src={logoSvg}
              alt="Lexir"
              width={103}
              height={24}
              objectFit="contain"
            />
          </a>
        </Link>

        <nav className="flex items-center gap-10">
          <ActiveLink name="PRODUCTS" href="/" activeClassName={active} />
          <ActiveLink name="BRANDS" href="/brands" activeClassName={active} />
          <ActiveLink
            name="HELLO, LEANDRO"
            href="/profile"
            activeClassName={active}
            icon={UserCircle}
          />

          <div className="relative">
            <span className="bg-green-600 left-[10px] top-[-8px] text-white w-4 h-4 flex items-center text-[8px] font-bold justify-center rounded-full absolute border-[1px] ">
              4
            </span>
            <ActiveLink
              name="CART"
              href="/cart"
              activeClassName={active}
              icon={Handbag}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};
