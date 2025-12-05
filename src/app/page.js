import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCars from "./components/FeaturedCars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <main>
        {/* <Navbar/> */}
        <Navbar/>
        {/* hero section */}
        <div className="min-h-screen">
          <HeroSection />
          <FeaturedCars />
          <WhyChooseUs />
        </div>
      </main>
    </>
  );
}
