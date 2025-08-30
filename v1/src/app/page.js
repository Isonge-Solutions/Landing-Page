import Navbar from "@/Components/navbar/Navbar";
import Heroimage from "../images/Hero.png";
import Hero from "@/Components/hero/Hero";

export default function Home() {
  return (
    <>
      {/* Wrapper for Navbar + Hero background */}
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Heroimage.src})` }}
      >
        <Navbar/>
        <Hero />
      </div>
    </>
  );
}
