import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Building2,
  Users,
  Globe,
  Briefcase,
  Clipboard,
  ShieldCheck,
} from 'lucide-react';

const HomeServices = () => {
  return (
    <section className="py-16 check-bg">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-bold p-2 w-fit m-auto bg-white/20 text-center text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-md:gap-2">
          {[
            {
              icon: Building2,
              title: 'Corporate Recruitment',
              description: 'Partner with leading UAE companies for permanent staffing solutions.',
            },
            {
              icon: Users,
              title: 'Talent Acquisition',
              description: 'Access a vast pool of qualified candidates across various industries.',
            },
            {
              icon: Globe,
              title: 'Immigration Support',
              description: 'Comprehensive assistance with visa and immigration procedures.',
            },
            {
              icon: Briefcase,
              title: 'Job Placement',
              description: 'We help you find your dream job with top companies in the UAE.',
            },
            {
              icon: Clipboard,
              title: 'Document Assistance',
              description: 'Professional support with preparing and submitting your documents.',
            },
            {
              icon: ShieldCheck,
              title: 'Compliance & Legal Support',
              description: 'Ensuring your immigration and employment processes comply with UAE law.',
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-white/80 p-0 rounded-xl border hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary inline mb-2" />
                <h3 className="text-xl text-left font-semibold text-gray-900">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-left">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
