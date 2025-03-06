import Hero from "./Hero";
import Testimonials from "./Testimonial";
import Footer from "./Footer-repo";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
