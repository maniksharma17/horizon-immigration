import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/Testimonials';
import { images } from '@/lib/constants';
import WhyChooseUs from '@/components/WhyChooseUs';
import HomeServices from '@/components/HomeServices';
import FAQSection from '@/components/HomeFAQ';

const Home = () => {
  return (
    <div className='relative'>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${`/hero.avif`})` 
        }}
      >
        <div className="container px-4 py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to Career Opportunities in the UAE
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We connect talented professionals with leading employers across the UAE,
              providing comprehensive recruitment and immigration services.
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-b from-accent px-8 py-6 text-xl rounded-lg to-orange-900 hover:scale-110 transition-all duration-300">
                <Link to="/jobs">Browse Jobs</Link>
              </Button>
              <Button asChild size="lg" className="text-white bg-transparent px-8 py-4 text-xl rounded-lg border-2 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <HomeServices />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection />


    </div>
  );
};

export default Home;