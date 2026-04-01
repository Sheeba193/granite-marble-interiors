import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Services} from "@/sections/Services";
import {Products} from "@/sections/Products";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

import "./index.css"
import { Footer } from "@/layout/Footer";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App