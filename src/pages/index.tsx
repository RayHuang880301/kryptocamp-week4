import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MintCard from "@/components/MintCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="flex flex-col w-full h-full">
        <Header />
        <MintCard />
      </div>
    </main>
  );
}
