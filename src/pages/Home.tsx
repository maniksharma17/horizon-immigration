import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import HomeServices from '@/components/HomeServices';
import FAQSection from '@/components/HomeFAQ';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      {/* SEO Optimization with Helmet */}
      <Helmet>
        <title>Horizon Immigration - Your Trusted Immigration Consultancy</title>
        <meta 
          name="description" 
          content="Horizon Immigration, a division of Sai Immigration (Regt), connects talented professionals with leading employers across the UAE, providing comprehensive recruitment and immigration services." 
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="UAE immigration, recruitment services, career opportunities, work in UAE, job opportunities UAE" />
        <meta property="og:title" content="Horizon Immigration - Your Trusted Immigration Consultancy" />
        <meta 
          property="og:description" 
          content="Horizon Immigration connects talented professionals with leading employers across the UAE, offering recruitment and immigration services." 
        />
        <meta property="og:image" content="https://www.immigrationhorizon.com/logo_HI.png" />
        <meta property="og:url" content="https://www.immigrationhorizon.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horizon Immigration - Your Trusted Immigration Consultancy" />
        <meta name="twitter:description" content="Horizon Immigration connects talented professionals with leading employers across the UAE." />
        <meta name="twitter:image" content="https://www.immigrationhorizon.com/logo_HI.png" />
        
      </Helmet>

      <main className="relative">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center bg-cover bg-center pt-16 max-md:pt-0"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${`/hero.avif`})` 
          }}
        >
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Gateway to Career Opportunities in the UAE
              </h1>
              <h2 className="text-xl mb-8 text-gray-200">
                We connect talented professionals with leading employers across the UAE,
                providing comprehensive recruitment and immigration services.
              </h2>
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
      </main>
    </>
  );
};

export default Home;
