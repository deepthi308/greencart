import React from "react";
import MainBanner from "../components/MainBanner";
import Catagories from "../components/Catagories";
import BestSellers from "../components/BestSellers";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <div className="mt-10">
      <MainBanner />
      <Catagories />
      <BestSellers />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
}
