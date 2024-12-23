import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  MapPin,
  Building2,
  Clock,
  Search,
} from 'lucide-react';

const jobListings = [
  {
    title: 'Warehouse Manager',
    company: 'Global Logistics Co.',
    location: 'Dubai',
    type: 'Full-time',
    salary: 'AED 12,000 - 15,000',
    experience: '5+ years',
    category: 'Warehouse & Logistics',
    description: 'Experienced warehouse manager needed to oversee operations.',
  },
  {
    title: 'Sales Executive',
    company: 'Tech Solutions LLC',
    location: 'Abu Dhabi',
    type: 'Full-time',
    salary: 'AED 10,000 - 14,000',
    experience: '3+ years',
    category: 'Sales',
    description: 'Drive B2B sales and maintain client relationships.',
  },
  {
    title: 'HR Manager',
    company: 'Corporate Services',
    location: 'Dubai',
    type: 'Full-time',
    salary: 'AED 15,000 - 18,000',
    experience: '7+ years',
    category: 'HR',
    description: 'Lead HR operations and implement strategic initiatives.',
  },
  {
    title: 'Electrician',
    company: 'Construction Pro',
    location: 'Sharjah',
    type: 'Full-time',
    salary: 'AED 8,000 - 10,000',
    experience: '4+ years',
    category: 'Trade Jobs',
    description: 'Commercial and industrial electrical installation and maintenance.',
  },
  {
    title: 'Hotel Manager',
    company: 'Luxury Hotels Group',
    location: 'Dubai',
    type: 'Full-time',
    salary: 'AED 20,000 - 25,000',
    experience: '8+ years',
    category: 'Hospitality',
    description: 'Manage luxury hotel operations and guest experiences.',
  },
  {
    title: 'Logistics Coordinator',
    company: 'Shipping International',
    location: 'Abu Dhabi',
    type: 'Full-time',
    salary: 'AED 7,000 - 9,000',
    experience: '2+ years',
    category: 'Warehouse & Logistics',
    description: 'Coordinate shipping and logistics operations.',
  },
];

const Jobs = () => {
  return (
    <div className="pt-16">
      <div className="container px-4 py-20 m-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Job Opportunities</h1>
          <p className="text-lg text-muted-foreground">
            Explore the latest job opportunities across various industries in the UAE
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-9"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="warehouse">Warehouse & Logistics</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="trade">Trade Jobs</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;