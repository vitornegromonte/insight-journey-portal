
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Linkedin, Instagram, BookOpenText  } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 flex flex-col items-center min-h-[calc(100vh-200px)] justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto border border-gray-100 shadow-sm mb-8">
            <AvatarImage src="vnco.JPG" alt="Vitor Negromonte" className="object-cover" />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
          
          <h1 className="text-gray-900 font-display text-4xl md:text-5xl mb-4 tracking-tight">
            Vitor Negromonte
          </h1>
          
          <p className="text-gray-600 text-lg mb-2 max-w-lg mx-auto leading-relaxed font-light">
            Data Scientist and AI Researcher. Conducting research in <span className="text-accent">Generative AI</span> and <span className="text-accent">Computer Vision</span>.
          </p>
          
          <div className="flex justify-center gap-6 mt-10">
            <a href="cv.pdf" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <FileText size={20} />
            </a>
            <a href="mailto:contato.vnco@gmail.com" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Mail size={20} />
            </a>
            <a href="http://github.com/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="http://linkedin.com/in/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="http://instagram.com/vitor.ncabral" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="http://medium.com/@vitornegromonte" className="text-gray-500 hover:text-accent transition-colors duration-300">
              <BookOpenText size={20} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
