
import { Link } from "react-router-dom";
import { FileText, Github, Linkedin, BookOpenText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 flex flex-col items-center min-h-[calc(100vh-200px)] justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <Avatar className="w-28 h-28 mx-auto border border-gray-100 shadow-sm mb-6">
            <AvatarImage src="vnco.JPG" alt="Vitor Negromonte" className="object-cover" />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
          
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-3 tracking-tight">
            Vitor Negromonte
          </h1>
          
          <p className="text-gray-600 mb-6 mx-auto leading-relaxed">
            Data Scientist and AI Researcher specializing in 
            <span className="text-accent"> Generative AI</span> and 
            <span className="text-accent"> Computer Vision</span>
          </p>
          
          <div className="flex justify-center gap-5 mt-6">
            <a href="/cv.pdf" className="text-gray-500 hover:text-accent transition-colors duration-300" download>
              <FileText size={20} />
            </a>
            <a href="http://github.com/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="http://linkedin.com/in/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="http://medium.com/@vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <BookOpenText size={20} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
