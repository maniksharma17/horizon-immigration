import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '../App.css'
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Manager at Tech Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    content: 'Horizon Immigration helped us find exceptional talent for our Dubai office. Their understanding of the local market is outstanding.',
  },
  {
    name: 'Mohammed Al-Rashid',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    content: 'The teams professionalism and attention to detail made our recruitment process seamless. Highly recommended!',
  },
  {
    name: 'Emily Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    content: 'Thanks to Horizon Immigration, I found my dream job in Dubai. They guided me through every step of the process.',
  },
  {
    name: 'Sarah Johnson',
    role: 'HR Manager at Tech Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    content: 'Horizon Immigration helped us find exceptional talent for our Dubai office. Their understanding of the local market is outstanding.',
  },
  {
    name: 'Mohammed Al-Rashid',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    content: 'The teams professionalism and attention to detail made our recruitment process seamless. Highly recommended!',
  },
  {
    name: 'Emily Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    content: 'Thanks to Horizon Immigration, I found my dream job in Dubai. They guided me through every step of the process.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-blue-950 dark:to-background">
      <div className="container px-4 m-auto">
        <h2 className="text-4xl max-md:text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="overflow-hidden flex flex-row">
          {/* First copy */}
          <div className="flex animate-slide infinite-scroll">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/50 dark:bg-white/5 w-80 backdrop-blur-sm mx-4">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second copy */}
          <div className="flex animate-slide infinite-scroll">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/50 dark:bg-white/5 w-80 backdrop-blur-sm mx-4">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
