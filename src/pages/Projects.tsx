
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Neural Style Transfer Gallery",
      description: "An interactive web application that allows users to apply style transfer algorithms to their photos using various artistic styles.",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "TensorFlow", "React", "AI Art"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "ai-art"
    },
    {
      id: 2,
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for visualizing and analyzing complex datasets with machine learning predictions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "Scikit-learn", "D3.js", "Data Viz"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "data-viz"
    },
    {
      id: 3,
      title: "AI Text-to-Image Generator",
      description: "A custom implementation of text-to-image generation models with controllable parameters for artistic expression.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1564&q=80",
      tags: ["PyTorch", "CLIP", "Diffusion Models", "NLP"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "ai-art"
    },
    {
      id: 4,
      title: "Sentiment Analysis for Social Media",
      description: "A tool that analyzes social media posts to determine sentiment and identify emerging trends and patterns.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      tags: ["Python", "NLP", "BERT", "Sentiment Analysis"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "nlp"
    },
    {
      id: 5,
      title: "Medical Image Segmentation",
      description: "An automated system for identifying and segmenting features in medical images using deep learning.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "TensorFlow", "Computer Vision", "Medical AI"],
      githubUrl: "https://github.com/",
      liveUrl: null,
      category: "computer-vision"
    },
    {
      id: 6,
      title: "Anomaly Detection System",
      description: "A machine learning system that identifies unusual patterns in time-series data, with applications in finance and cybersecurity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "Anomaly Detection", "Time Series", "ML"],
      githubUrl: "https://github.com/",
      liveUrl: null,
      category: "machine-learning"
    },
    {
      id: 7,
      title: "Interactive Data Exploration Tool",
      description: "A web-based platform for interactive exploration and visualization of multidimensional datasets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      tags: ["JavaScript", "D3.js", "React", "Data Viz"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "data-viz"
    },
    {
      id: 8,
      title: "Neural Music Composition",
      description: "An AI system that composes original music pieces by learning patterns from existing compositions.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "TensorFlow", "Audio Processing", "AI Art"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      category: "ai-art"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai-art", name: "AI Art" },
    { id: "data-viz", name: "Data Visualization" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "computer-vision", name: "Computer Vision" },
    { id: "nlp", name: "Natural Language Processing" },
  ];

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">My Work</span>
          <h1 className="text-gradient font-display mb-6">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of data science, machine learning, and AI projects.
            From research implementations to practical applications and creative experiments.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-12 px-4" ref={projectsRef}>
        <div className="container mx-auto section-fade-in">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="glass-morphism p-1">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    onClick={() => setFilter(category.id)}
                    className="data-[state=active]:bg-accent/20"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={filter} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl || undefined}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
