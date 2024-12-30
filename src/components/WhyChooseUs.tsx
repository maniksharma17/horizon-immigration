import {
  Briefcase,
  TrendingUp,
  CheckCircle,
  Waypoints,
  UserCheck,
  Sparkles
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
              className="flex flex-col text-left max-md:p-4 items-start space-y-4 p-8 rounded-xl bg-white/80 border hover:shadow-lg hover:scale-105 duration-300 transition-all"
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
    title: 'Expert Knowledge of UAE Market',
    description: 'Our team has extensive experience and knowledge of the UAE job market, ensuring we find the best fit for your career goals.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record of Success',
    description: 'With a history of successful placements, we have built a reputation as a trusted and reliable recruitment partner in the UAE.',
  },
  {
    icon: Briefcase,
    title: 'Personalized Recruitment Services',
    description: 'We take the time to understand your skills, experience, and career aspirations, providing tailored recruitment solutions.',
  },
  {
    icon: Waypoints,
    title: 'Strong Network of Employers',
    description: 'Our established relationships with leading UAE employers across various industries ensure access to exclusive job opportunities.',
  },
  {
    icon: Sparkles,
    title: 'Seamless Placement Process',
    description: 'Our dedicated team guides you through every step of the recruitment process, ensuring a smooth transition into your new role.',
  },
  {
    icon: UserCheck,
    title: 'Candidate-Centric Approach',
    description: 'We prioritize your needs and goals, providing ongoing support and career guidance to help you achieve success.',
  },
];

export default WhyChooseUs;
