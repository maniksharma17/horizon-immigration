import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <main className="flex items-center justify-center h-screen w-screen z-50 text-black bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <img
          src="/logo_HI.png" // Replace with your actual logo URL
          alt="Horizon Immigration Logo"
          className="mx-auto mb-6 h-24"
        />
        <h1 className="text-4xl font-semibold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mb-8">You will be redirected to the homepage shortly.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </main>
  );
};

export default NotFound;
