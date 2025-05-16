
import { Link } from "react-router-dom";
import { FileText, Github, Linkedin, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Avatar className="w-28 h-28 mx-auto border border-gray-100 shadow-sm mb-6">
            <AvatarImage src="vnco.JPG" alt="Vitor Negromonte" className="object-cover" />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
          
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-3 tracking-tight">
            Vitor Negromonte
          </h1>
          
          <div className="flex justify-center gap-2 mb-4">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/10">
              AI Researcher
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
              Data Scientist
            </Badge>
          </div>
          
          <p className="text-gray-600 mb-6 mx-auto leading-relaxed">
            I'm a researcher focusing on <span className="text-accent font-medium">Generative AI</span> and 
            <span className="text-accent font-medium"> Computer Vision</span> applications.
            My work explores the intersection of artificial intelligence and real-world problems,
            with particular emphasis on accessibility and healthcare.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="/cv.pdf" download>
                <FileText size={18} />
                <span>Curriculum Vitae</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                <BookOpen size={18} />
                <span>Google Scholar</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="http://github.com/vitornegromonte" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Recent Publications Section */}
        <div className="w-full max-w-3xl mx-auto mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-display text-gray-900">Recent Publications</h2>
            <Link to="/papers" className="text-accent text-sm hover:underline">
              View all publications →
            </Link>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg mb-4 hover:shadow-md transition-shadow">
            <span className="text-sm text-gray-500">Brazilian Symposium on Information Systems (2025)</span>
            <h3 className="text-lg font-medium mb-1">A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism</h3>
            <p className="text-gray-600 text-sm mb-2">Danilo Monteiro Ribeiro, Felipe de Vasconcelos Melo, <strong>Vitor Cabral de Oliveira</strong>, et al.</p>
            <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
              Read paper →
            </a>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <span className="text-sm text-gray-500">Brazilian Symposium on Human Factors in Computing Systems (2024)</span>
            <h3 className="text-lg font-medium mb-1">A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps</h3>
            <p className="text-gray-600 text-sm mb-2">Danilo M. Ribeiro, Felipe V. Melo, <strong>Vitor Negromonte</strong>, et al.</p>
            <a href="https://sol.sbc.org.br" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
              Read paper →
            </a>
          </div>
        </div>
        
        {/* Research Interests Section */}
        <div className="w-full max-w-3xl mx-auto mt-16">
          <h2 className="text-xl font-display text-gray-900 mb-6">Research Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-medium mb-2">Generative AI</h3>
              <p className="text-gray-600 text-sm">Exploring the capabilities of large language models and diffusion models for creative and practical applications.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-medium mb-2">Computer Vision</h3>
              <p className="text-gray-600 text-sm">Developing models for image recognition, segmentation, and analysis in healthcare and accessibility domains.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-medium mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Creating AI solutions that improve technological accessibility for individuals with various needs and abilities.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
