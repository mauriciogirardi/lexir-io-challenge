import Image from "next/image";
import logoLight from "@assets/logo-light.svg";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

interface NavLinkProps {
  name: string;
  path: string;
}

export const Footer = () => {
  const active = "font-bold text-green-600 ";

  const NavLink = ({ name, path }: NavLinkProps) => {
    return (
      <Link href={path}>
        <a className="hover:text-brand-400 transition-colors duration-100 ease-linear">
          {name}
        </a>
      </Link>
    );
  };

  return (
    <footer className="bg-brand-700 text-white p-10">
      <div className="px-4 container mx-auto">
        <div className="flex items-start justify-between">
          <Image
            src={logoLight}
            alt="Lexir"
            width={103}
            height={24}
            objectFit="contain"
          />

          <nav className="flex flex-col gap-5">
            <h3 className="text-brand-400 font-medium">COMMUNITY</h3>
            <NavLink name="Lexir for Brands" path="/" />
            <NavLink name="Business Buyers" path="/" />
            <NavLink name="Sales Affiliates" path="/" />
          </nav>

          <nav className="flex flex-col gap-5">
            <h3 className="text-brand-400 font-medium">PLATFORM</h3>
            <NavLink name="Resources" path="/" />
            <NavLink name="Pricing" path="/" />
            <NavLink name="Get Started" path="/" />
          </nav>

          <nav className="flex flex-col gap-5">
            <h3 className="text-brand-400 font-medium">COMPANY</h3>
            <NavLink name="About" path="/" />
            <NavLink name="Contact" path="/" />
            <NavLink name="Legal" path="/" />
          </nav>

          <nav className="flex flex-col gap-5">
            <h3 className="text-brand-400 font-medium">LEXIR SHOP</h3>
            <NavLink name="Brands" path="/" />
            <NavLink name="Spirits" path="/" />
            <NavLink name="Wine" path="/" />
            <NavLink name="Blog" path="/" />
          </nav>

          <div className="flex items-center gap-5">
            <a className="cursor-pointer hover:text-brand-400 transition-colors duration-100 ease-linear">
              <FacebookLogo weight="fill" size={21} />
            </a>
            <a className="cursor-pointer hover:text-brand-400 transition-colors duration-100 ease-linear">
              <InstagramLogo weight="fill" size={21} />
            </a>
            <a className="cursor-pointer hover:text-brand-400 transition-colors duration-100 ease-linear">
              <LinkedinLogo weight="fill" size={21} />
            </a>
          </div>
        </div>

        <div className="border-t-[1px] mt-7 border-brand-400 flex items-center justify-between">
          <p className="text-brand-400">&copy; 2022 Lexir Inc.</p>

          <div className="flex items-center gap-8 mt-5">
            <a className="font-medium cursor-pointer hover:text-brand-400 transition-colors duration-100 ease-linear">
              Privacy
            </a>
            <a className="font-medium cursor-pointer hover:text-brand-400 transition-colors duration-100 ease-linear">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
