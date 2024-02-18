import Image from "next/image";
import React from "react";
import Navbar from "./_components/navbar";
import Hero from "./_components/LandingPage/Hero";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
