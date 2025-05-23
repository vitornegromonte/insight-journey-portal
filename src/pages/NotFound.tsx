import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 px-4">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-lg text-gray-600 mb-4">Page not found</p>
          <a href="/" className="text-accent hover:underline">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
