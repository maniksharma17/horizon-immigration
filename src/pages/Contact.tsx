import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';
import {images} from "../lib/constants"

const formSchema = z.object({
  fullName: z.string().min(5, 'Full name must be at least 5 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(2, 'Country is required'),
  state: z.string().min(2, 'State is required'),
  city: z.string().min(2, 'City is required'),
  pinCode: z.string().min(4, 'Pin code must be at least 4 digits'),
  experience: z.string().min(1, 'Please select your experience level'),
  jobType: z.string().min(1, 'Please select a job type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      country: '',
      state: '',
      city: '',
      pinCode: '',
      experience: '',
      jobType: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Form submitted successfully!');
    console.log(values);
  }

  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className="bg-transparent pt-16 pb-4">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-4xl max-md:text-3xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reach out to us for inquiries or assistance with UAE immigration and job opportunities.
              </p>
              <div className="flex flex-row max-md:flex-col gap-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Address',
                    details: 'Dubai, United Arab Emirates',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    details: '+971 XX XXX XXXX',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    details: 'contact@horizonimmigration.com',
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center border p-4 overflow-x-clip rounded-lg shadow-lg">
                    <item.icon className="h-8 w-8 align-left mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-8 m-auto w-full contact-check-bg">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="United Arab Emirates" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Dubai" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Dubai City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pinCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pin Code</FormLabel>
                    <FormControl>
                      <Input placeholder="00000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="warehouse">
                          Warehouse & Logistics
                        </SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="trade">Trade Jobs</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Custom Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="md:col-span-2 bg-gradient-to-b from-accent to-orange-700">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
