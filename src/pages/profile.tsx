import Head from "next/head";
import { LayoutDefault } from "@layout/LayoutDefault";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Lexir - Profile</title>
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-3xl text-green-800">Profile</h1>
        </div>
      </LayoutDefault>
    </>
  );
}
