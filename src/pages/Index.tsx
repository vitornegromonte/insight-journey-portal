
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import PaperCard from "@/components/PaperCard";
import ArtCard from "@/components/ArtCard";
import Footer from "@/components/Footer";

const Index = () => {
  // Refs for sections that will fade in
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const papersRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

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

    const sections = [aboutRef.current, projectsRef.current, papersRef.current, artRef.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Hero />

      {/* About Section */}
      <section ref={aboutRef} className="py-20 section-fade-in">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
              <h2 className="text-gradient font-display mb-6">Passionate about data & creativity</h2>
              <p className="text-muted-foreground mb-6">
                I'm a PhD candidate at University of Technology, where I research applications of deep learning 
                to generative art and creative AI systems. My work sits at the intersection of computer science,
                statistics, and digital art.
              </p>
              <p className="text-muted-foreground mb-8">
                With a background in mathematics and computer science, I combine rigorous technical knowledge
                with creative exploration to push the boundaries of what's possible with AI.
              </p>
              <Link to="/about">
                <Button className="gap-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 glass-morphism rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-display text-gradient-accent mb-2">3+</h3>
                  <p className="text-muted-foreground text-sm">Years Research Experience</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-display text-gradient-accent mb-2">12+</h3>
                  <p className="text-muted-foreground text-sm">Published Papers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-display text-gradient-accent mb-2">20+</h3>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-display text-gradient-accent mb-2">5+</h3>
                  <p className="text-muted-foreground text-sm">Art Exhibitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-gradient-to-b from-dark to-dark-accent section-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">My Work</span>
            <h2 className="text-gradient font-display mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of my research projects and applications in machine learning,
              data visualization, and AI-assisted creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Neural Style Transfer Gallery"
              description="An interactive web application that allows users to apply style transfer algorithms to their photos using various artistic styles."
              image="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              tags={["Python", "TensorFlow", "React", "AI Art"]}
              githubUrl="https://github.com/"
              liveUrl="https://example.com"
            />
            <ProjectCard 
              title="Predictive Analytics Dashboard"
              description="A comprehensive dashboard for visualizing and analyzing complex datasets with machine learning predictions."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              tags={["Python", "Scikit-learn", "D3.js", "Data Viz"]}
              githubUrl="https://github.com/"
              liveUrl="https://example.com"
            />
            <ProjectCard 
              title="AI Text-to-Image Generator"
              description="A custom implementation of text-to-image generation models with controllable parameters for artistic expression."
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1564&q=80"
              tags={["PyTorch", "CLIP", "Diffusion Models", "NLP"]}
              githubUrl="https://github.com/"
              liveUrl="https://example.com"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" className="gap-2">
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section ref={papersRef} className="py-20 section-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Research</span>
            <h2 className="text-gradient font-display mb-4">Selected Papers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              My published research in machine learning, computer vision, and computational creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PaperCard 
              title="Generative Adversarial Networks for Creative Image Synthesis: A Comparative Study"
              authors="Gus Anderson, Jane Doe, John Smith"
              conference="Conference on Neural Information Processing Systems (NeurIPS)"
              year="2023"
              abstract="This paper presents a comprehensive analysis of different GAN architectures for creative image synthesis, with a focus on controllability and artistic expressiveness."
              tags={["GAN", "Image Synthesis", "Deep Learning"]}
              pdfUrl="https://example.com/paper1.pdf"
            />
            <PaperCard 
              title="Explainable AI in Medical Imaging: Towards Transparent Diagnostic Tools"
              authors="Gus Anderson, Maria Rodriguez, et al."
              conference="International Conference on Machine Learning (ICML)"
              year="2022"
              abstract="We propose a novel approach to explainable AI in medical imaging that provides intuitive visual explanations for diagnostic decisions while maintaining high accuracy."
              tags={["XAI", "Medical Imaging", "Computer Vision"]}
              pdfUrl="https://example.com/paper2.pdf"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/papers">
              <Button variant="outline" className="gap-2">
                <span>View All Papers</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section ref={artRef} className="py-20 bg-gradient-to-b from-dark-accent to-dark section-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Creative Work</span>
            <h2 className="text-gradient font-display mb-4">AI Art Gallery</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Exploring the intersection of artificial intelligence and artistic expression
              through generative algorithms and creative coding.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ArtCard 
              title="Neural Dreams #1"
              image="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              technique="GAN"
              year="2023"
            />
            <ArtCard 
              title="Diffusion Patterns"
              image="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              technique="Stable Diffusion"
              year="2023"
            />
            <ArtCard 
              title="Algorithmic Landscape"
              image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              technique="StyleGAN"
              year="2022"
            />
            <ArtCard 
              title="Fractal Composition"
              image="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80"
              technique="Fractal Art"
              year="2022"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/art">
              <Button variant="outline" className="gap-2">
                <span>View Full Gallery</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 glass-morphism">
        <div className="container mx-auto text-center">
          <h2 className="text-gradient font-display mb-6 max-w-xl mx-auto">
            Let's collaborate on your next data science project
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you need help with data analysis, machine learning implementation, or AI-powered
            creative solutions, I'm available for consultations and collaborations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
