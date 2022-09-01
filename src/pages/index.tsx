import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Package } from "phosphor-react";

import { LayoutDefault } from "@layout/LayoutDefault";
import { CardProduct } from "@components/CardProduct";

import baldoriaSvg from "@assets/baldoria-logo.svg";
import ginSvg from "@assets/packshot-audemus-umami-gin.png";
import brandSvg from "@assets/packshot-mr-gaston-brandy.png";
import poolGinSvg from "@assets/packshot-silent-pool-silent-pool-gin.png";
import packshotSvg from "@assets/stockholms-branneri-pink-gin-packshot.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
      </Head>

      <LayoutDefault>
        <div className="flex my-14 gap-9 items-start">
          <aside className="flex flex-col items-center border px-11 pb-8 pt-4">
            <Image src={baldoriaSvg} alt="Baldoria" />
            <h1 className="text-4xl mt-16 font-bold font-pro">
              Baldoria Vermouth
            </h1>

            <p className="mt-5 w-[310px]">
              Badoria rosso is a red vermouth that balances fresh, herby bitter
              notes against. Kiss My Rhubarb takes its origins from an old
              handwritten recipe from co-creators Niels’ and Wouters’ rebellious
              grandparents.
            </p>

            <Link href="/">
              <a className="font-bold text-xl text-green-600 my-8">Read More</a>
            </Link>

            <div className="mt-4">
              <div className="flex gap-4">
                <MapPin size={21} />
                <div>
                  <h3 className="text-black text-base">Location</h3>
                  <span className="text-2xl text-brand-500">
                    London, United Kingdom
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <Package size={21} />
                <div>
                  <h3 className="text-black text-base mb-4">
                    Product Categories
                  </h3>
                  <div className="flex items-center gap-6">
                    <span className=" text-brand-700 bg-gray-100 py-2 px-6 rounded">
                      Gin
                    </span>
                    <span className=" text-brand-700 bg-gray-100 py-2 px-6 rounded">
                      Vodka
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="grid grid-cols-4 gap-9">
            <CardProduct image={ginSvg} name="mr gaston" price="32" />
            <CardProduct image={brandSvg} name="mr gaston" price="32" />
            <CardProduct image={poolGinSvg} name="mr gaston" price="32" />
            <CardProduct image={packshotSvg} name="mr gaston" price="32" />
            <CardProduct image={ginSvg} name="mr gaston" price="32" />
            <CardProduct image={brandSvg} name="mr gaston" price="32" />
            <CardProduct image={poolGinSvg} name="mr gaston" price="32" />
            <CardProduct image={packshotSvg} name="mr gaston" price="32" />
            <CardProduct image={ginSvg} name="mr gaston" price="32" />
            <CardProduct image={brandSvg} name="mr gaston" price="32" />
            <CardProduct image={poolGinSvg} name="mr gaston" price="32" />
            <CardProduct image={packshotSvg} name="mr gaston" price="32" />
            <CardProduct image={ginSvg} name="mr gaston" price="32" />
            <CardProduct image={brandSvg} name="mr gaston" price="32" />
            <CardProduct image={poolGinSvg} name="mr gaston" price="32" />
            <CardProduct image={packshotSvg} name="mr gaston" price="32" />
          </main>
        </div>
      </LayoutDefault>
    </>
  );
}
