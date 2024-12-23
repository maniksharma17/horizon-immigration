import {
  Briefcase,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 cross-bg">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-bold w-fit text-gray-900 bg-white/20 m-auto text-center  p-2 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-md:gap-2">
          {content.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col shadow-lg text-left max-md:p-4 items-start space-y-4 p-8 rounded-xl bg-white/80 border hover:border-gray-300 hover:scale-105 duration-300 transition-all"
            >
              <feature.icon className="h-12 w-12 text-accent" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const content = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Successfully placed thousands of candidates in the UAE.',
  },
  {
    icon: TrendingUp,
    title: 'Industry Expertise',
    description: 'Deep understanding of UAE job market and requirements.',
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Focus on long-term success and professional development.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Successfully placed thousands of candidates in the UAE.',
  },
  {
    icon: TrendingUp,
    title: 'Industry Expertise',
    description: 'Deep understanding of UAE job market and requirements.',
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Focus on long-term success and professional development.',
  },
];

export default WhyChooseUs;
