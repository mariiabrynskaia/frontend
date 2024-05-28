// 'use client';

import Link from "next/link";
import SecondHeader from "@/components/SecondHeader";
import Catalog from "@/components/Catalog";
import LongAd from "@/components/LongAd";
import Banners from "@/components/Banners";
import Accessory from "@/components/Accessory";
import FirstBlock from "@/components/FirstBlock";
import ScrollAd from "@/components/ScrollAd";
import Package from "@/components/Package";
import RealLifeBanner from "@/components/StatisticBanners/RealLifeBanner";
import Features from "@/components/StatisticBanners/Features";
import StatisticBanners from "@/components/StatisticBanners";
import DownloadManual from "@/components/DownloadManual";
import Gift from "@/components/Gift";
import Reviews from "@/components/Reviews";
import Control from "@/components/Control";
import LastBlock from "@/components/LastBlock";
import ScooterCatalog from "@/components/ScooterCatalog";
import ComparisonCardOne from "@/components/Comparison/ComparisonCardOne";
import Comparison from "@/components/Comparison";

export default function Home() {
  // for test
  const accessoryData = {
    id: 1,
    name: "Accessory Name",
    description: "Accessory Description",
    price: 29.99,
    image: "backpack.png",
  };

  return (
    <div>
      {/* <div>
        <SecondHeader />
      </div>
      <div>
        <Catalog />
      </div>
      <div>
        <LongAd />
      </div> */}
      <div>
        <FirstBlock />
      </div>
      {/* <div>
        <ScrollAd />
      </div>
      <div>
        <Package />
      </div> */}
      {/* <div>
        <Accessory />
      </div>
      <div>
        <StatisticBanners />
      </div>
      <div>
        <Banners />
      </div> */}
      <div>
        <DownloadManual />
      </div>
      <div>
        <Comparison />
      </div>
      <div>
        <Gift />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Control />
      </div>
      <div>
        <LastBlock />
      </div>
      <div>
        <ScooterCatalog />
      </div>
    </div>
  );
}