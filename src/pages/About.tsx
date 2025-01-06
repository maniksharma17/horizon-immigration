import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="relative check-bg">
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Horizon Immigration - Your Trusted Recruitment Partner in UAE</title>
        <meta
          name="description"
          content="Horizon Immigration, a division of Sai Immigration (Regt), is your trusted partner for recruitment and immigration services in the UAE. Learn more about our mission, values, and achievements."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="about Horizon Immigration, recruitment services, immigration consultancy, UAE recruitment, career opportunities UAE" />
        <link rel="icon" type="image/png" href="/logo_HI.png" />
        <link rel="canonical" href="https://www.immigrationhorizon.com/about" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="About Horizon Immigration - Your Trusted Recruitment Partner in UAE"
        />
        <meta
          property="og:description"
          content="Horizon Immigration, a division of Sai Immigration (Regt), is your trusted partner for recruitment and immigration services in the UAE. Learn more about our mission, values, and achievements."
        />
        <meta
          property="og:image"
          content="https://www.immigrationhorizon.com/logo_HI.png"
        />
        <meta property="og:url" content="https://www.immigrationhorizon.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Horizon Immigration - Your Trusted Recruitment Partner in UAE"
        />
        <meta
          name="twitter:description"
          content="Horizon Immigration, a division of Sai Immigration (Regt), is your trusted partner for recruitment and immigration services in the UAE. Learn more about our mission, values, and achievements."
        />
        <meta
          name="twitter:image"
          content="https://www.immigrationhorizon.com/logo_HI.png"
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="pt-20 px-20 max-md:px-4 h-auto flex flex-col items-start">
        <div className="container mt-12 mx-auto px-4 max-w-6xl">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-4xl text-left font-extrabold mb-4 w-full text-accent">About Horizon Immigration</h1>
            <h2 className="text-lg shadow-sm border text-left bg-gray-100 p-4 rounded-xl">
            "Welcome to Horizon Immigration, A division of Sai Immigration (Regt) your trusted partner for recruitment services in the UAE. We specialize in connecting top talent with leading employers across various industries, including warehouse and logistics, sales, HR, trade jobs, and hospitality. Our team is committed to providing exceptional service to candidates, ensuring seamless placement and career growth. With a strong network and expertise in UAE recruitment, we bridge the gap between job seekers and employers, fostering successful partnerships."
            </h2>
          </div>
        </div>
        <div className='mt-4 px-24 max-md:px-4 flex flex-row max-md:flex-col gap-2 justify-center'>
          <img src={'/about1.avif'} alt="Office environment at Horizon Immigration" className='shadow-lg w-[20vw] max-md:w-full m-0 rounded-3xl' />
          <img src={'/about2.avif'} alt="Consultation at Horizon Immigration" className='shadow-lg w-[20vw] max-md:w-full m-0 rounded-3xl' />
          <img src={'/about3.avif'} alt="Teamwork at Horizon Immigration" className='shadow-lg w-[20vw] max-md:w-full m-0 rounded-3xl' />
        </div>
      </section>

      {/* Who Are We */}
      <section className="px-20 max-md:px-4 mt-16 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-2 text-accent">Who Are We?</h2>
          <p className="text-gray-800 shadow-lg leading-relaxed bg-gray-100 p-4 rounded-xl">
          Horizon Immigration, A division of Sai Immigration (Regt), is a trusted and forward-thinking consultancy firm with a core focus on recruitment and immigration services within the UAE. Our mission is to connect outstanding professionals with leading employers, facilitating opportunities for career growth and organizational success. With a deep understanding of the UAE's dynamic job market and regulatory landscape, we aim to simplify and streamline the recruitment and immigration processes, making transitions effortless for individuals and businesses alike. Whether you're a skilled professional seeking the perfect job or an employer in search of exceptional talent, Horizon Immigration is committed to bridging the gap and delivering results that exceed expectations.          
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-20 max-md:px-4 mt-16 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
          <p className="text-gray-800 shadow-lg leading-relaxed bg-gray-100 p-4 rounded-xl">
          Our mission is to empower professionals and businesses by simplifying and optimizing the recruitment and immigration journey. We aim to create opportunities that enable individuals to achieve their career aspirations while supporting organizations in building high-performing teams. With a client-centered approach, we are dedicated to delivering exceptional service, ensuring that every step of the process is seamless, transparent, and efficient. By fostering trust and collaboration, we contribute to the growth, success, and long-term sustainability of the people and businesses we serve. At Horizon Immigration, we strive to be more than just a consultancy – we aspire to be a trusted partner in your journey toward a brighter future.          
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-20 mt-16 text-left max-md:px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-accent">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-md:gap-2">
            {[
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'We uphold the highest ethical standards, fostering trust and respect in every interaction.',
              },
              {
                icon: Target,
                title: 'Excellence',
                description:
                  'We deliver exceptional results by consistently exceeding expectations.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description:
                  'We build enduring partnerships that drive shared success and mutual growth.',
              },
            ].map((value, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="text-left p-6">
                  <value.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="px-20 mt-16 text-left max-md:px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-accent">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-md:gap-2">
            {[
              {
                icon: Sparkles,
                title: 'Continuous Innovation',
                description:
                  'Embracing the latest technologies and strategies to provide efficient and reliable solutions.',
              },
              {
                icon: Target,
                title: 'Seamless Experiences',
                description:
                  'Ensuring a smooth, hassle-free process for both individuals and businesses.',
              },
              {
                icon: TrendingUp,
                title: 'Empowering Growth',
                description:
                  'Supporting professionals in achieving their career goals and helping businesses build successful teams.',
              },
              {
                icon: Heart,
                title: 'Building Lasting Relationships',
                description:
                  'Fostering trust and collaboration for long-term success.',
              },
            ].map((value, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="text-left p-6">
                  <value.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-20 mt-16 text-left pb-20 max-md:px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-accent mb-4">Our Achievements</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: '1,200+', label: 'Successful Placements' },
              { number: '600+', label: 'Partner Companies' },
              { number: '12+', label: 'Years of Experience' },
              { number: '98%', label: 'Client Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-left bg-gray-100 hover:shadow-lg transition-all duration-300 p-4 rounded-xl">
                <div className="text-4xl font-bold text-gray-700 mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
