import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono">
      <Head>
        <title>Matt Heslop shoots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 p-16 lg:px-32 max-w-5xl">
        <Image
          src="/holding.jpg"
          alt="A picture of me in a garden chatting."
          width={1025}
          height={820}
        />
        <h1 className="text-gray-500 tracking-wider font-medium mt-8 lg:text-xl">
          Website coming soon
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 text-xs text-gray-500 font-medium tracking-wider">
        &copy; MMXX
      </footer>
    </div>
  );
}
