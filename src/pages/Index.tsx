
import { Link } from "react-router-dom";
import { FileText, Github, Linkedin, BookOpen, Image, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/ProjectsData";

const Index = () => {
  // Get featured/recent projects (first 2)
  const featuredProjects = projectsData.slice(0, 2);

  // Sample art data (typically would come from a data file)
  const featuredArt = [
    {
      id: 1,
      title: "Urban Motion",
      image: "/neruda.jpg",
      technique: "Digital Photography",
      year: "2024"
    },
    {
      id: 2,
      title: "Color Theory",
      image: "/orange.jpeg",
      technique: "Digital Art",
      year: "2023"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center justify-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
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
        </section>
        
        {/* Recent Publications Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-gray-900 flex items-center gap-2">
                <BookOpen size={20} className="text-accent" />
                Recent Publications
              </h2>
              <Link to="/papers" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all publications →
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg mb-4 hover:bg-gray-100/80 transition-colors">
                <span className="text-sm text-gray-500">Brazilian Symposium on Information Systems (2025)</span>
                <h3 className="text-lg font-medium mb-1">A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism</h3>
                <p className="text-gray-600 text-sm mb-2">Danilo Monteiro Ribeiro, Felipe de Vasconcelos Melo, <strong>Vitor Cabral de Oliveira</strong>, et al.</p>
                <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:text-accent/80 transition-colors">
                  Read paper →
                </a>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100/80 transition-colors">
                <span className="text-sm text-gray-500">Brazilian Symposium on Human Factors in Computing Systems (2024)</span>
                <h3 className="text-lg font-medium mb-1">A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps</h3>
                <p className="text-gray-600 text-sm mb-2">Danilo M. Ribeiro, Felipe V. Melo, <strong>Vitor Negromonte</strong>, et al.</p>
                <a href="https://sol.sbc.org.br" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:text-accent/80 transition-colors">
                  Read paper →
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Projects Section */}
        <section className="container mx-auto px-4 py-8 bg-gray-50/50">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-gray-900 flex items-center gap-2">
                <Layers size={20} className="text-accent" />
                Recent Projects
              </h2>
              <Link to="/projects" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all projects →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-accent text-sm hover:text-accent/80 transition-colors"
                    >
                      View project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Art Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-gray-900 flex items-center gap-2">
                <Image size={20} className="text-accent" />
                Featured Art
              </h2>
              <Link to="/art" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all artwork →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredArt.map((art) => (
                <div key={art.id} className="group relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <Badge variant="outline" className="bg-black/15 text-white text-xs mb-2 w-fit">
                      {art.technique}
                    </Badge>
                    <h4 className="text-white font-display">{art.title}</h4>
                    <p className="text-white/70 text-sm">{art.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Research Interests Section */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-display text-gray-900 mb-6">Research Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100/80 transition-colors">
                <h3 className="font-medium mb-2">Generative AI</h3>
                <p className="text-gray-600 text-sm">Exploring the capabilities of large language models and diffusion models for creative and practical applications.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100/80 transition-colors">
                <h3 className="font-medium mb-2">Computer Vision</h3>
                <p className="text-gray-600 text-sm">Developing models for image recognition, segmentation, and analysis in healthcare and accessibility domains.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100/80 transition-colors">
                <h3 className="font-medium mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">Creating AI solutions that improve technological accessibility for individuals with various needs and abilities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
