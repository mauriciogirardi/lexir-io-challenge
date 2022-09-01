import { LayoutDefault } from "@layout/LayoutDefault";

import Head from "next/head";

export default function Brands() {
  return (
    <>
      <Head>
        <title>Lexir - Brands</title>
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-3xl text-green-800">Brands</h1>
        </div>
      </LayoutDefault>
    </>
  );
}
