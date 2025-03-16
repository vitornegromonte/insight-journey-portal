
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 flex flex-col items-center min-h-[calc(100vh-200px)] justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-2 border-accent mb-8">
            <img 
              src="/lovable-uploads/ea0e9c56-b5f9-4957-992b-0a1060c1020e.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-gradient-accent font-display text-4xl md:text-5xl mb-4">
            Gus Anderson
          </h1>
          
          <h2 className="text-white/80 text-xl md:text-2xl mb-6">
            Data Scientist & AI Researcher
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm a PhD candidate specializing in machine learning and AI-driven art. 
            My research explores the intersection of computational creativity and 
            generative systems, with a focus on neural networks that can produce 
            visually compelling and meaningful outputs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <Button size="lg" className="gap-2">
                About Me <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                View Projects <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
