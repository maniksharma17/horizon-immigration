import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Clock, Search, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // For SEO enhancements

interface JobType {
  title: string;
  description: string;
  skills: string;
  experience: string;
  salary: string;
  age: string;
  education: string;
}

const Jobs = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);

  const [jobCategories, setJobCategories] = useState<Record<string, JobType[]>>({
    warehouse: [] as JobType[],
    hr: [] as JobType[],
    sales: [] as JobType[],
    trade: [] as JobType[],
    hospitality: [] as JobType[],
    all: [] as JobType[],
  });

  const classifyJob = (job: JobType): string => {
    const warehouseKeywords = ["warehouse", "logistics", "supply"];
    const hrKeywords = ["hr", "admin", "human resource"];
    const salesKeywords = ["sales", "customer"];
    const tradeKeywords = ["technician", "electrician", "welder", "plumber", "mason", "carpenter", "painter", "foreman"];
    const hospitalityKeywords = ["chef", "cook", "service crew", "restaurant", "hospitality"];

    const titleLower = job.title.toLowerCase();

    if (warehouseKeywords.some(keyword => titleLower.includes(keyword))) return "warehouse";
    if (hrKeywords.some(keyword => titleLower.includes(keyword))) return "hr";
    if (salesKeywords.some(keyword => titleLower.includes(keyword))) return "sales";
    if (tradeKeywords.some(keyword => titleLower.includes(keyword))) return "trade";
    if (hospitalityKeywords.some(keyword => titleLower.includes(keyword))) return "hospitality";
    return "all";
  };

  useEffect(() => {
    const categorizedJobs = jobs.reduce(
      (acc, job) => {
        const category = classifyJob(job);
        acc[category].push(job);
        acc.all.push(job);
        return acc;
      },
      { warehouse: [], hr: [], sales: [], trade: [], hospitality: [], all: [] } as Record<string, JobType[]>
    );
    setJobCategories(categorizedJobs);
    setFilteredJobs(categorizedJobs.all);
  }, []);

  useEffect(() => {
    const searchLower = filter.toLowerCase();
    const filtered = jobCategories[category].filter((job: JobType) =>
      job.title.toLowerCase().includes(searchLower)
    );
    setFilteredJobs(filtered);
  }, [filter, category, jobCategories]);

  const [pageNumber, setPageNumber] = useState(1)
  const itemsPerPage = 9
  const [currentJobs, setCurrentJobs] = useState<JobType[]>(filteredJobs)
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)

  useEffect(()=>{
    const startIndex = (pageNumber - 1) * itemsPerPage
    const currentData = filteredJobs.slice(startIndex, startIndex + itemsPerPage)
    setCurrentJobs(currentData)
  }, [pageNumber, itemsPerPage, filteredJobs])

  const goToPage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setPageNumber(pageNumber);
      window.scrollTo(0, 0)
    }
  };

  return (
    <div className="pt-16 h-auto pb-32 check-bg">
      <Helmet>
        <title>Job Opportunities in UAE - Immigration Horizon</title>
        <meta name="description" content="Explore the latest job opportunities across various industries in the UAE. Apply for positions in warehouse, sales, hospitality, HR, and more." />
        <meta name="keywords" content="jobs, UAE, warehouse, HR, sales, hospitality, trade jobs, immigration" />
      </Helmet>

      <div className="container px-4 py-20 m-auto">
        <header>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Job Opportunities</h1>
            <h2 className="text-lg text-muted-foreground">
              Explore the latest job opportunities across various industries in the UAE.
            </h2>
          </div>
        </header>

        {/* Filters */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              onChange={e => setFilter(e.target.value)}
              placeholder="Search jobs..."
              className="pl-9 bg-white shadow-md"
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-white shadow-md">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="warehouse">Warehouse & Logistics</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="trade">Trade Jobs</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* Job Grid */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map((job, index) => (
              <Card key={index}>
                <CardContent className="pt-6 h-fit">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-left text-lg mb-1 w-full">
                        {job.title}
                      </h3>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {"Full Time"}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-left text-sm mb-4">
                    {job.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2" size={20} />
                      <span className="w-fit text-left">{job.experience}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="w-fit text-left">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-left text-muted-foreground">
                      <Wrench className="h-4 w-4 mr-2" />
                      <span className="w-fit text-left">{job.skills}</span>
                    </div>
                    <div className="flex items-center text-left text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span className="w-fit text-left">{job.education}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0) }}
                    className="w-full hover:scale-105 transition-all duration-200 hover:bg-orange-600">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Pagination */}
      <section className="flex flex-row gap-8 justify-center items-center">
        <div>
          <Button 
            onClick={() => goToPage(pageNumber - 1)}
            disabled={pageNumber === 1}
            variant={"outline"}>Prev</Button>
        </div>
        <div>
          {pageNumber}/{totalPages}
        </div>
        <div>
          <Button 
            onClick={() => goToPage(pageNumber + 1)}
            disabled={pageNumber === totalPages}
            variant={"outline"}>Next</Button>
        </div>
      </section>
    </div>
  );
};

interface JobType {
  title: string,
  description: string,
  skills: string,
  experience: string,
  salary: string,
  age: string,
  education: string,
}

const jobs: JobType[] = [
  {
    title: "Indian Tandoor Chef",
    description:
      "Ability to prepare Tikka and Tandoori Chicken with Sauces. Good knowledge of all preparation & basic cooking methods.",
    skills: "Culinary skills, Knowledge of Indian Tandoor cuisine",
    experience: "Minimum 5 years",
    salary: "SAR 1800 + 300 (Food Allowance)",
    age: "25-35",
    education: "Secondary School or Higher Secondary level",
  },
  {
    title: "Indian Bread Maker",
    description:
      "Ability to prepare Roti, Paratha, Rumali Roti, Butter Naan, Tandoori Roti.",
    skills: "Bread-making skills, Knowledge of Indian cuisine",
    experience: "Minimum 2 years",
    salary: "SAR 1800 + 300 (Food Allowance)",
    age: "25-35",
    education: "Secondary School or Higher Secondary level",
  },
  {
    title: "Truck Mixer Driver",
    description: "Drive and operate truck mixers for construction projects.",
    skills: "Truck operation, Knowledge of construction materials",
    experience: "Not specified",
    salary: "SAR 1200 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Service Crew",
    description:
      "Handle food preparation, customer service, and cleaning activities in a fast-food restaurant.",
    skills: "Customer service, Fast food operations",
    experience: "Not specified",
    salary: "SAR 1100 + 300 (Food Allowance)",
    age: "22-27",
    education: "Not specified",
  },
  {
    title: "Restaurant Manager",
    description:
      "Oversee restaurant operations, manage staff, and ensure excellent customer service.",
    skills: "Management, Customer service",
    experience: "Experience in fast-food chains like McDonald's, KFC, etc.",
    salary: "SAR 2800 + 300 (Food Allowance)",
    age: "25-32",
    education: "College Degree",
  },
  {
    title: "Warehouse Worker",
    description:
      "Packing, scanning, loading, unloading in warehouses, coffee shops, and supermarkets.",
    skills: "Warehouse operations",
    experience: "Not specified",
    salary: "Not specified",
    age: "21-30",
    education: "Not specified",
  },
  {
    title: "Team Leader - Reinforcement",
    description: "Lead reinforcement tasks in construction projects.",
    skills: "Leadership, Reinforcement expertise",
    experience: "Not specified",
    salary: "SAR 1100 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Team Leader - Retouching",
    description: "Supervise retouching activities in construction projects.",
    skills: "Leadership, Retouching expertise",
    experience: "Not specified",
    salary: "SAR 1100 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Team Leader - Stockyard",
    description: "Manage stockyard operations effectively.",
    skills: "Leadership, Stockyard management",
    experience: "Not specified",
    salary: "SAR 1100 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Batching Plant Operator",
    description: "Operate batching plants for construction projects.",
    skills: "Batching plant operation",
    experience: "Not specified",
    salary: "SAR 1700 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Casting Foreman",
    description: "Oversee casting operations in construction projects.",
    skills: "Supervisory skills, Casting expertise",
    experience: "Not specified",
    salary: "SAR 1600 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Mason",
    description: "Perform masonry tasks in construction projects.",
    skills: "Masonry skills",
    experience: "Not specified",
    salary: "SAR 900 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Overhead Crane Operator",
    description: "Operate overhead cranes in construction sites.",
    skills: "Crane operation",
    experience: "Not specified",
    salary: "SAR 900 + 200",
    age: "Not specified",
    education: "Not specified",
  },
  {
    title: "Airfield Lighting Technician",
    description:
      "Perform installation and maintenance of airfield lighting systems.",
    skills: "Airfield lighting expertise, Electrical skills",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 3000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Aluminium Technician",
    description:
      "Fabrication and installation of curtain walls, sky lights, doors, windows, and kitchens.",
    skills: "Fabrication, Installation",
    experience: "Not specified",
    salary: "KD 60",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Mason (Marble/Ceramics/Tiles)",
    description: "Specialize in marble, ceramic, and tile masonry tasks.",
    skills: "Masonry skills",
    experience: "Not specified",
    salary: "KD 50",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Glass Cutting CNC Operator",
    description: "Operate automatic programming machines for glass cutting.",
    skills: "CNC operation, Glass cutting expertise",
    experience: "Not specified",
    salary: "KD 50",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Corian/Acrylic Technician",
    description:
      "Specialize in tabletop fabrication using corian and acrylic materials.",
    skills: "Corian and acrylic fabrication",
    experience: "Not specified",
    salary: "KD 50",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Furniture Carpenter",
    description: "Perform carpentry tasks for furniture fabrication.",
    skills: "Carpentry",
    experience: "Not specified",
    salary: "KD 70",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Helper",
    description:
      "Assist with various tasks in aluminium and construction work.",
    skills: "Basic assistance skills",
    experience: "Not specified",
    salary: "KD 100",
    age: "42-54",
    education: "Not specified",
  },
  {
    title: "Airfield Lighting Network/Electronic Technician",
    description:
      "Handle electronic and network systems related to airfield lighting.",
    skills: "Electronics, Networking",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Airfield Lighting Electrician",
    description:
      "Perform electrical maintenance for airfield lighting systems.",
    skills: "Electrical maintenance",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Escalator Mechanic Technician",
    description: "Maintain and repair escalators.",
    skills: "Mechanics, Escalator systems",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Electrical High Voltage Technician",
    description: "Handle high voltage electrical systems.",
    skills: "High voltage expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2300",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Telephone Technician",
    description: "Maintain and troubleshoot telephone systems.",
    skills: "Telecommunications, Technical troubleshooting",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Generator Mechanical Technician",
    description: "Repair and maintain mechanical components of generators.",
    skills: "Generator mechanics",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "AC/HVAC/Chiller Technician",
    description:
      "Maintain and repair air conditioning, HVAC, and chiller systems.",
    skills: "HVAC expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1900",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "General Electrician",
    description: "Perform general electrical tasks and maintenance.",
    skills: "Electrical systems",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Radio/CCTV/IFIDS Technician",
    description: "Maintain and repair radio, CCTV, and IFIDS systems.",
    skills: "Radio systems, CCTV expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Fire Alarm System Technician",
    description: "Install and maintain fire alarm systems.",
    skills: "Fire alarm expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1700",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Hygiene Worker",
    description: "Maintain hygiene standards in the workplace.",
    skills: "Basic English communication",
    experience: "Not specified",
    salary: "SAR 1500 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Factory Worker",
    description: "Assist in factory operations and tasks.",
    skills: "Basic English communication",
    experience: "Not specified",
    salary: "SAR 1500 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Production Worker",
    description: "Work on production tasks in a factory environment.",
    skills: "Basic English communication",
    experience: "Not specified",
    salary: "SAR 1500 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Quality Checker",
    description: "Inspect products to ensure quality standards are met.",
    skills: "Basic English communication",
    experience: "Not specified",
    salary: "SAR 1700 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Machine Operator",
    description: "Operate machinery in a production environment.",
    skills: "Machine operation, Basic English communication",
    experience: "Not specified",
    salary: "SAR 2000 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Production Line Leader",
    description: "Supervise and lead a production line team.",
    skills: "Leadership, Production management, Basic English communication",
    experience: "Not specified",
    salary: "SAR 2300 + OT",
    age: "21-40",
    education: "Not specified",
  },
  {
    title: "Welder",
    description: "Perform welding tasks in various projects.",
    skills: "Welding expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Plumber",
    description: "Perform plumbing tasks for installation and maintenance.",
    skills: "Plumbing expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1400",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Tile Mason",
    description: "Specialize in laying tiles and related masonry tasks.",
    skills: "Tile masonry expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1400",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Denter & Painter",
    description:
      "Perform denting and painting tasks on vehicles or structures.",
    skills: "Denting and painting expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1700",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Wall Painter",
    description:
      "Perform wall painting tasks in construction or maintenance projects.",
    skills: "Painting expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 1500",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Airfield Lighting Supervisor",
    description:
      "Supervise airfield lighting installation and maintenance tasks.",
    skills: "Supervisory skills, Airfield lighting expertise",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 4000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Civil Supervisor",
    description: "Supervise civil engineering tasks and projects.",
    skills: "Civil engineering, Supervisory skills",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 4000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Electrical Engineer",
    description: "Handle and oversee electrical engineering tasks.",
    skills: "Electrical engineering",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 4000",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Logistics Coordinator",
    description: "Coordinate and manage logistics and supply chain tasks.",
    skills: "Logistics management, Coordination",
    experience: "Minimum 5 years in maintenance field",
    salary: "SAR 2800",
    age: "23-40",
    education: "Not specified",
  },
  {
    title: "Admin (HR)",
    description:
      "Manage HR administrative tasks, including payroll and ERP system operations.",
    skills: "Computer skills, ERP system, English and Urdu proficiency",
    experience: "2 years of experience in the HR department in Saudi Arabia",
    salary: "SAR 1400 to 1700 (Fixed Salary)",
    age: "25-35",
    education: "Diploma",
  },
  {
    title: "Admin (Accommodation)",
    description:
      "Manage accommodation-related administrative tasks, including ERP system operations and driving responsibilities.",
    skills:
      "Computer skills, ERP system (preferred), English proficiency, Driving license",
    experience: "2 years of experience in accommodation management",
    salary: "SAR 1500 to 1800 + 30 food (Fixed Salary)",
    age: "25-35",
    education: "Diploma",
  },
];

export default Jobs;
