import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-500',
        isScrolled
          ? 'bg-background backdrop-blur-md shadow-md p-0'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex gap-2 items-center">
            <img src='\logo_HI.png' alt="horizon immigration logo" className={cn('w-16 h-16 bg-white', 
              isScrolled ? 'hidden' : 'block'
            )}></img>
            <span
              className={cn(
                'font-normal text-left text-2xl max-md:text-lg transition-colors',
                isScrolled ? 'text-foreground' : 'text-primary-foreground',
                (location.pathname !== '/')  && 'text-foreground'
              )}
            >
              Horizon Immigration
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Jobs', '/jobs'],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'transition-all duration-300 px-2',
                  location.pathname === path
                    ? 'border-b-4 border-primary font-medium text-secondary'
                    : '',
                  isScrolled ? 'text-foreground' : 'text-secondary-foreground',
                  (location.pathname !== '/') && 'text-foreground'
                )}
              >
                {name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            value={"menu"}
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "h-6 w-6 text-primary",
              )} />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 absolute rounded-lg right-2 top-13 w-[250px] bg-primary shadow-2xl py-8 px-4 text-white">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Jobs', '/jobs'],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'block py-2 px-4 rounded-md transition-colors hover:bg-muted',
                  location.pathname === path
                    ? 'bg-white text-black font-medium'
                    : 'font-normal'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className='w-full flex flex-row justify-evenly pt-8 items-center gap-2'>
              <a href="https://wa.me/+919528387189">
                <div className="flex cursor-pointer flex-row gap-2 items-start">
                  <img src="/WhatsappMenuIcon.svg" alt="whatsapp logo" className="h-8 w-8" />
                </div>
              </a>
              <a href="https://www.instagram.com/horizon_immigration1/">
                <div className="flex cursor-pointer flex-row gap-2 items-start">
                  <img src="/InstagramMenuIcon.svg" alt="instagram logo" className="h-10 w-10" />
                </div>
              </a>
              <a href="https://www.facebook.com/share/19hbgqrYsi/?mibextid=wwXIfr">
                <div className="flex cursor-pointer flex-row gap-2 items-start">
                  <img src="/FacebookMenuIcon.svg" alt="facebook logo" className="h-8 w-8" />
                </div>
              </a>
              <a href="https://www.youtube.com/@horizon_immigration1">
                <div className="flex cursor-pointer flex-row gap-2 items-start">
                  <img src="/YoutubeMenuIcon.svg" alt="youtube logo" className="h-10 w-10" />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
