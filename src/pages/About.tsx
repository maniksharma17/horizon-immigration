import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';
import {images} from "../lib/constants"

const About = () => {
  const width = window.innerWidth > 860
  return (
    <div className="pt-16 relative">
      {/* Hero Section */}
      <section className="py-20 align-middle h-[40vh] max-md:h-[48vh] top-0 absolute left-0 right-0 text-gray-100 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${images.about})`,
        backgroundPositionY: width? -520 : 0,
      }}
      >
        <div className="container mx-auto px-4 max-w-6xl mt-10">
          <div className="text-center text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-6">About Horizon Immigration</h1>
            <p className="text-lg leading-relaxed">
              We are a leading recruitment agency in the UAE, dedicated to connecting
              exceptional talent with outstanding opportunities. Our expertise spans
              across multiple industries, ensuring the perfect match between
              candidates and employers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 cross-bg from-gray-200 to-transparent mt-64 max-md:mt-96">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='bg-white/70 rounded-xl shadow-xl py-6 px-4'>
              <h2 className="text-3xl font-bold mb-4 text-gray-700">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To facilitate seamless connections between talented professionals and
                leading UAE employers, while providing comprehensive support
                throughout the recruitment and immigration process.
              </p>
            </div>
            <div className='bg-white/70 rounded-xl shadow-xl py-6 px-4 h-[200px]'>
              <h2 className="text-3xl font-bold mb-4 text-gray-700">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred recruitment partner in the UAE,
                known for our commitment to excellence, integrity, and successful
                placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30 check-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'We maintain the highest ethical standards in all our dealings.',
              },
              {
                icon: Target,
                title: 'Excellence',
                description:
                  'We strive for excellence in every aspect of our service.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description:
                  'We believe in building strong partnerships with our clients and candidates.',
              },
            ].map((value, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="text-center p-6">
                  <value.icon className="h-12 w-12 mb-4 text-primary mx-auto" />
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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Successful Placements' },
              { number: '500+', label: 'Partner Companies' },
              { number: '10+', label: 'Years Experience' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
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
