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
import { Mail } from 'lucide-react';
import { useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(false)

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      setIsLoading(true)
      const url = "https://script.google.com/macros/s/AKfycbxrxMNsnVROYXL9Lk46nz8a8_9TVZ-PHDVHJAJadOlXlPhOjhpPrVNR1CpwrxsTFBWR/exec"
      fetch(url,{
        method:"POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:(`FullName=${values.fullName}&Phone=${values.phone}&Email=${values.email}&City=${values.city}&State=${values.state}&Country=${values.country}&PinCode=${values.pinCode}&Experience=${values.experience}&JobType=${values.jobType}&Message=${values.message}`)
      }).then(res=>res.text()).then(data=>{
        toast.success("Submitted successfully.")
        console.log(data)
      }).catch(error=>console.log(error))
    } catch(error){
      console.log(error)
    } finally {
      setIsLoading(false)
    }
    
  }

  return (
    <div className='relative check-bg flex lg:flex-row flex-col lg:px-20 lg:pt-10 px-4 pt-16 items-center'>
      {/* Hero Section */}
      <div className="bg-transparent">
        <div className="container mx-auto max-w-5xl p-8">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl max-md:text-3xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reach out to us for inquiries or assistance with UAE immigration and job opportunities.
              </p>
              <div className="flex flex-row justify-center max-md:flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    details: 'team@immigrationhorizon.com',
                  },
                ].map((item, index) => (
                  <div key={index} className="text-left bg-white/90 border p-4 overflow-x-clip rounded-lg shadow-lg">
                    <item.icon className="h-8 w-8 mx-auto mb-4 text-primary inline mt-1 mr-2" />
                    <h3 className="font-semibold max-md:text-lg mb-2 inline">{item.title}</h3>
                    <p className="text-muted-foreground">{item.details}</p>
                    <Button variant={"outline"} className='mt-2'><a href="mailto:team@immigrationhorizon.com?body=Hello">Send Mail</a></Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-8 m-auto w-full">
        <div className="max-w-4xl mx-auto bg-white/80 p-8 shadow-2xl border">
          <h2 className="text-4xl text-orange-600 font-bold mb-6 text-center">Get in Touch</h2>
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
                      <Input placeholder="+91 XXXX XXX XXX" {...field} />
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
                      <Input placeholder="India" {...field} />
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
                      <Input placeholder="Maharashtra" {...field} />
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
                      <Input placeholder="Mumbai" {...field} />
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
                      <Input placeholder="400016" {...field} />
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

              <Button type="submit" disabled={isLoading} className="md:col-span-2 bg-gradient-to-b from-accent to-orange-700">
                {isLoading? "Submitting...":"Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
