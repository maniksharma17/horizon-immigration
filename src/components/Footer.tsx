import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-gray-950 text-white py-8 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:items-center md:grid md:grid-cols-4 gap-6">
          {/* Company Info Section */}
          <div className='text-left col-span-1'>
            <div className="flex items-center space-x-3 mb-4">
              <img src='\logo_HI.png' alt="horizon immigration logo" className="h-20 w-20 text-primary bg-white p-0" />
              <span className="font-extrabold text-xl">Horizon Immigration</span>
            </div>
            <p className="text-md text-primary-foreground">
              Your trusted partner for recruitment services in the UAE.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className='text-left md:w-fit md:m-auto'>
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
              <li className="flex flex-row gap-2 items-start">
                <Mail className="h-5 w-5 text-white" />
                <span><a href='mailto:team@immigrationhorizon.com'>team@immigrationhorizon.com</a></span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Phone className="h-5 w-5 text-white" />
                <span><a href='tel:+91 8279506101'>+91 8279506101</a></span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Phone className="h-5 w-5 text-white" />
                <span><a href='tel:+91 8923620620'>+91 8923620620</a></span>
              </li>
              <div className='grid grid-cols-2 w-fit gap-2 md:flex md:flex-row justify-center items-center content-center'>

                <li className="">
                  <a href='https://wa.me/+919528387189'>
                    <img src='/WhatsappIcon.svg' alt="whatsapp logo" className="h-10 w-10" />
                  </a>
                </li>
                
                <li className="">
                  <a href='https://www.instagram.com/horizon_immigration1/'>
                    <img src='/InstagramIcon.svg' alt="instagram logo" className="h-12 w-12" />
                  </a>
                </li>

                <li className="flex justify-start">
                  <a href='https://www.facebook.com/share/19hbgqrYsi/?mibextid=wwXIfr'>
                    <img src='/FacebookIcon.svg' alt="facebook logo" className="h-10 w-10" />
                  </a>
                </li>

                <li className="">
                  <a href='https://www.youtube.com/@horizon_immigration1'>
                    <img src='/YoutubeIcon.svg' alt="youtube logo" className="h-12 w-12" />
                  </a>
                </li>
              </div>
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
