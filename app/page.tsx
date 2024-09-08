"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Features from "../components/Features";
import { CTA } from "../components/CTA";
import { Grow } from "../components/Grow";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero2 />
        <Features />
        <Grow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
