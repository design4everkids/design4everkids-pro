import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
  <Navbar />

  <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
    <Hero />
    <Categories />
    <Products />
    <Features />
    <Testimonials />
    <CTA />
  </main>

  <Footer />
</>
  );
}