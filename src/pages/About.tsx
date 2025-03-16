
import { useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  // Refs for sections that will fade in
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const sections = [bioRef.current, educationRef.current, skillsRef.current];
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
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
          <h1 className="text-gradient font-display mb-6">The Story So Far</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, skills, and the journey that led me to become a data scientist
            specializing in the intersection of machine learning and creative applications.
          </p>
        </div>
      </section>
      
      {/* Bio Section */}
      <section ref={bioRef} className="py-16 section-fade-in">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="aspect-square w-full max-w-md rounded-xl overflow-hidden border border-accent/20">
                  <img 
                    src="/lovable-uploads/ea0e9c56-b5f9-4957-992b-0a1060c1020e.png" 
                    alt="Gus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full filter blur-[50px]"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue/20 rounded-full filter blur-[50px]"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-display mb-6">My Journey</h2>
              <p className="text-muted-foreground mb-4">
                I'm a PhD candidate and researcher in artificial intelligence with a focus on machine learning applications
                for creative computing. My academic journey began with a Bachelor's in Computer Science and Mathematics,
                followed by a Master's in Data Science where I first explored the potential of AI for artistic expression.
              </p>
              <p className="text-muted-foreground mb-4">
                Currently, I'm researching how neural networks can be used as creative tools, developing new algorithms
                that help bridge the gap between human creativity and machine intelligence. My work has been featured in 
                several academic conferences and art exhibitions, exploring the boundaries of what's possible when humans
                and AI collaborate.
              </p>
              <p className="text-muted-foreground">
                Beyond my research, I'm passionate about making machine learning more accessible and interpretable. I 
                regularly contribute to open-source projects and create educational content about data science and AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section ref={educationRef} className="py-16 bg-dark-accent section-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display mb-10 text-center">Education & Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-display mb-6">Education</h3>
              
              <div className="space-y-8">
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">PhD in Computer Science</h4>
                    <span className="text-accent">2021 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">University of Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Researching novel applications of deep learning for creative computing and generative art.
                    Thesis focused on developing interpretable neural network architectures for artistic expression.
                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">MSc in Data Science</h4>
                    <span className="text-accent">2019 - 2021</span>
                  </div>
                  <p className="text-muted-foreground mb-2">University of Innovation</p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in machine learning and neural networks. Master's thesis on "Generative Adversarial Networks
                    for Creative Image Synthesis" received departmental honors.
                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">BSc in Computer Science & Mathematics</h4>
                    <span className="text-accent">2015 - 2019</span>
                  </div>
                  <p className="text-muted-foreground mb-2">State University</p>
                  <p className="text-sm text-muted-foreground">
                    Double major with focus on algorithms, computational theory, and statistical analysis.
                    Graduated with highest honors.
                  </p>
                </div>
              </div>
            </div>
            
            <Separator className="my-12 bg-white/10" />
            
            <div>
              <h3 className="text-xl font-display mb-6">Professional Experience</h3>
              
              <div className="space-y-8">
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Research Assistant</h4>
                    <span className="text-accent">2021 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">AI Research Lab, University of Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Conducting research on deep learning models for creative applications. Contributing to open-source
                    machine learning libraries and publishing findings in top AI conferences.
                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Data Science Intern</h4>
                    <span className="text-accent">2020 - 2021</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Tech Innovations Inc.</p>
                  <p className="text-sm text-muted-foreground">
                    Developed machine learning models for pattern recognition and anomaly detection.
                    Implemented data pipelines for real-time analytics on large-scale datasets.
                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Software Developer</h4>
                    <span className="text-accent">2018 - 2019</span>
                  </div>
                  <p className="text-muted-foreground mb-2">WebTech Solutions</p>
                  <p className="text-sm text-muted-foreground">
                    Developed full-stack web applications with focus on data visualization and interactive dashboards.
                    Created custom analytics tools for business intelligence applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} className="py-16 section-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display mb-10 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-display mb-6">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Machine Learning</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Deep Learning / Neural Networks</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Statistical Analysis</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Visualization</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Natural Language Processing</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
              
              <h3 className="text-xl font-display mt-12 mb-6">Programming Languages</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Python</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 5 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>R</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 4 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>SQL</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 4 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>JavaScript</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 3 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>C++</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 3 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Java</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ml-1 ${i < 3 ? 'bg-accent' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-display mb-6">Tools & Frameworks</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">TensorFlow</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rounded-sm"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">PyTorch</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rotate-45"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Scikit-learn</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rounded-md transform rotate-45"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Pandas</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rounded-full"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">NumPy</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-2 h-6 bg-accent/60 rounded-full mx-0.5"></div>
                    <div className="w-2 h-6 bg-accent/60 rounded-full mx-0.5"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Matplotlib</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-3 bg-accent/60 rounded-md"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Jupyter</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rounded-full"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Keras</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/60 rounded-md"></div>
                  </div>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg text-center hover-card">
                  <span className="block text-sm font-medium mb-2">Git</span>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent/60 rotate-45"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-display mt-12 mb-6">Research Interests</h3>
              
              <div className="glass-morphism p-6 rounded-xl">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Generative Adversarial Networks (GANs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>AI for Creative Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Computer Vision & Image Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Explainable AI & Model Interpretability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Human-AI Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Neural Style Transfer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
