import React from "react";
import Navbar from "./_components/navbar";
import Hero from "./_components/LandingPage/Hero";
import Suggested from "./_components/LandingPage/Suggested";
import Foot from "./_components/LandingPage/Foot";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Suggested />
      <Foot />
    </main>
  );
}
