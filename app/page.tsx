import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Step from "./components/Steps";
import Healthcare from "./components/Healthcare";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Step/>
    <Healthcare/>
    <Blog/>
    <Footer/>
    </>
  );
}
