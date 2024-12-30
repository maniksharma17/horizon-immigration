import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-gray-950 text-white py-8 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-6">
          {/* Company Info Section */}
          <div className='text-left col-span-2'>
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="font-extrabold text-xl">Horizon Immigration</span>
            </div>
            <p className="text-md text-primary-foreground">
              Your trusted partner for recruitment services in the UAE.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className='text-left'>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Contact', 'Jobs'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-md font-light hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className='text-left'>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 font-light text-md">
              <li>Recruitment Services</li>
              <li>Job Placement</li>
              <li>Career Counseling</li>
              <li>Immigration Support</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='text-left'>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-md font-light">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Roorkee, Uttarakhand, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>team@immigrationhorizon.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white mt-6 pt-4 text-center text-md">
          <p>© {new Date().getFullYear()} Horizon Immigration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
