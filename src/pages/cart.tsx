import { LayoutDefault } from "@layout/LayoutDefault";
import Head from "next/head";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Lexir - Cart</title>
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-3xl text-green-800">Cart</h1>
        </div>
      </LayoutDefault>
    </>
  );
}
