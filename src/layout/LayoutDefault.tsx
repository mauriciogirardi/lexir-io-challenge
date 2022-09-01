import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { ReactNode } from "react";

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div className="flex flex-col  h-[100vh]">
      <Header />

      <section className="px-4 w-[1280px] mx-auto flex-1">{children}</section>

      <Footer />
    </div>
  );
};
