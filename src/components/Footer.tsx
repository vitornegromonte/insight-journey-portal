
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Link 
              to="/" 
              className="text-xl font-display tracking-tight"
            >
              <span className="text-accent">Vitor</span>
              <span className="text-gray-800"> Negromonte</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">Data Scientist & AI Researcher</p>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-3 text-gray-700">Pages</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className="text-gray-500 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link to="/projects" className="text-gray-500 hover:text-accent transition-colors text-sm">Projects</Link></li>
              <li><Link to="/papers" className="text-gray-500 hover:text-accent transition-colors text-sm">Papers</Link></li>
              <li><Link to="/art" className="text-gray-500 hover:text-accent transition-colors text-sm">Art</Link></li>
              <li><a href="/cv.pdf" download className="text-gray-500 hover:text-accent transition-colors text-sm">CV</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-3 text-gray-700">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/vitornegromonte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/vitornegromonte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://medium.com/@vitornegromonte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-accent transition-colors"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-50 text-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Vitor Negromonte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
