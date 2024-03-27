import Image from "next/image";

import { Colors } from "./_components/colors/colors";
import { Button } from "./_components/button";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
