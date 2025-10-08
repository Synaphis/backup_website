
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import {TestimonialsSection} from "@/components/Testimonials";
import {Integrations} from "@/components/Integrations";
import {LatestPosts} from "@/components/LatestPosts";

export default function Home() {
  return (
    <>
    
      
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <section id="services">
  <Features /> {/* Your Services Section */}
</section>


      <section id="testimonials">
  <TestimonialsSection />
   </section>

      
      <LatestPosts/>
      <Integrations/>

     <section id="faqs">
  <FAQs />
</section>

      <section id="contact" className="scroll-mt-24">
  <CallToAction /> {/* Your contact section or form */}
</section>
      <Footer />
    </>
  );
}
