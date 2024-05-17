import Link from "next/link";
import SecondHeader from "@/components/SecondHeader";
import Catalog from "@/components/Catalog";
import LongAd from "@/components/LongAd";

export default function Home() {
  return (
    <div>
      <div>
        <SecondHeader />
      </div>
      <div>
        <Catalog />
      </div>
      <div>
        <Catalog />
      </div>
      <div>
        <LongAd />
      </div>
    </div>
  );
}