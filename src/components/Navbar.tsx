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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span
              className={cn(
                'font-bold text-xl transition-colors',
                isScrolled ? 'text-foreground' : 'text-primary-foreground',
                (location.pathname !== '/' && location.pathname !== '/about')  && 'text-foreground'
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
                  (location.pathname !== '/' && location.pathname !== '/about') && 'text-foreground'
                )}
              >
                {name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "h-6 w-6",
                isScrolled
                ? 'text-black'
                : 'text-primary-foreground'
              )} />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 rounded-lg shadow-lg p-4 bg-background">
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
                    ? 'bg-primary text-white font-medium'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
