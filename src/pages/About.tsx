
import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
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
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
          <h1 className="font-display mb-6">The Story So Far</h1>
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
                    alt="Vitor" 
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
              Undergraduate Statistics student at the Federal University of Pernambuco (UFPE), with a focus on machine learning and model optimization. During my studies, I served as a teaching assistant in two courses: Computational Creativity and Introduction to Deep Learning, working with professors Filipe Calegario and Tsang Ing Ren , respectively.
              </p>
              <p className="text-muted-foreground mb-4">
                In my sophomore year, I joined the National Institute of Software Engineering as a junior researcher, conducting research in Human-Computer Interaction within the Smart Cities and Internet of Things research group, under the guidance of professor Kiev Gama and co-advised by Ana Paula Chaves from Northern Arizona University and Danilo Ribeiro from Cesar School . During this time, we got a paper accepted in the 2024's edition of the Brazilian Symposium on Human Factors in Computing Systems (IHC 2024) and in the 2025's edition of the Brazilian Symposium on Informations Systems (SBSI 2025), both promoted by the Brazilian Computer Society (SBC) , the main scientific event in the field of Human-Computer Interaction in Brazil.
              </p>
              <p className="text-muted-foreground mb-4">
              I am a co-founder and researcher at the Geraia research group, working with professors Filipe Calegario, Giordano Cabral and André Neves . At Geraia, I am currently conducting research in Generative AI, focusing on the evaluation and optimization of Language Models (LLMs) in Portuguese and probabilistic-based retrieval algorithms for high-dimensional data.
              </p>
              <p className="text-muted-foreground mb-4">
              I also co-founded the Artificial Intelligence League of the Federal University of Pernambuco, also known as LIGIA, which is linked to the CIn.AI group, a pioneering AI research group in Brazil founded in the 1970s. As Outreach Director of LIGIA, my main responsibilities include forming partnerships with other groups, companies, and governmental organizations, organizing events to showcase the use of AI in various fields (such as finance, healthcare, and more), and preparing educational materials to teach AI to the broader community. Since the league it's linked to the Federal University of Pernambuco, we had several professors in our board, such as George DC Cavalcanti, Adiel Filho, Tsang Ing Ren.
              </p>
              <p className="text-muted-foreground mb-4">
              During this time, I also co-founded a start-up called redduo.ai and served as Chief Data Officer/co-Chief Technology Officer, but left before the first year of its founding.
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
                    <h4 className="text-xl font-medium">B.Sc. in Statistics</h4>
                    <span className="text-accent">2022 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Federal University of Pernambuco</p>
                  <p className="text-sm text-muted-foreground">
                    Researching novel applications of deep learning for creative computing and generative art.
                    Thesis focused on developing interpretable neural network architectures for artistic expression.
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
                    <h4 className="text-xl font-medium">Co-founder and Outreach Director</h4>
                    <span className="text-accent">2024 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Ligia</p>
                  <p className="text-sm text-muted-foreground">
                  Ligia is an AI club/extracurricular project at the Federal University of Pernambuco, affiliated with the pioneering CIn.AI research group. As Outreach Director, I focus on building partnerships, organizing AI-focused events, and developing educational materials to promote AI across various fields.
                  </p>
                </div>

                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Researcher </h4>
                    <span className="text-accent">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Geraia, Federal University of Pernambuco</p>
                  <p className="text-sm text-muted-foreground">
                  Conducting research in Generative AI, focusing on evaluating Language Models in Portuguese for performance, scalability, and adaptability in emergent languages. Investigating energy-efficient AI for sustainable training and inference, optimizing generative models for deployment on low-resource devices.                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Teaching Assistant</h4>
                    <span className="text-accent">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Federal University of Pernambuco</p>
                  <div className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                    <li>Introduction to Deep Learning - Teaching core topics in Deep Learning, including Recurrent Neural Networks (RNNs), Convolutional Neural Networks (CNNs),
                    and Transformer Architecture.</li>
                      <li>Computational Creativity - Exploring the use of Generative AI tools for creative applications, covering topics such as Diffusion Models and Large Language
                      Models (LLMs).</li>
                    </ul>
                  </div>
                </div>

                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">Co-founder and Data Scientist</h4>
                    <span className="text-accent">2023 - 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-2">redduo.ai</p>
                  <p className="text-sm text-muted-foreground">
                  Worked as a Data Scientist, conducting data analysis to support business intelligence initiatives and developing software automations. Additionally served as an AI Scientist, contributing to the development of core AI models with a focus on optimization and performance enhancement.
                  </p>
                </div>
                
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">National Institute of Software Engineering (INES)</h4>
                    <span className="text-accent">2023 - 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-2">redduo.ai</p>
                  <p className="text-sm text-muted-foreground">
                  While working at the Brazilian Ministry of Science and Technology - National Institute of Software Engineering I have assisted in developing quantitative tools for analysis and enhancing accessibility techniques for apps designed to support adults on the autism spectrum.
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
              
              <div className="glass-morphism p-6 rounded-xl">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Deep Learning / Neural Networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Statistical Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Data Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Natural Language Processing</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-display mt-12 mb-6">Programming Languages</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-16 w-16" alt="Python" />
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="h-16 w-16" alt="R" />
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-16 w-16" alt="SQL" />
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" className="h-16 w-16" alt="LaTeX" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-display mb-6">Tools & Frameworks</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="h-12 w-12 mb-2" alt="TensorFlow" />
                  <span className="text-xs font-medium">TensorFlow</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className="h-12 w-12 mb-2" alt="PyTorch" />
                  <span className="text-xs font-medium">PyTorch</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="h-12 w-12 mb-2" alt="Scikit-learn" />
                  <span className="text-xs font-medium">Scikit-learn</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="h-12 w-12 mb-2" alt="Pandas" />
                  <span className="text-xs font-medium">Pandas</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="h-12 w-12 mb-2" alt="NumPy" />
                  <span className="text-xs font-medium">NumPy</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://matplotlib.org/stable/_static/logo2.svg" className="h-12 w-12 mb-2" alt="Matplotlib" />
                  <span className="text-xs font-medium">Matplotlib</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" className="h-12 w-12 mb-2" alt="Jupyter" />
                  <span className="text-xs font-medium">Jupyter</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" className="h-12 w-12 mb-2" alt="Keras" />
                  <span className="text-xs font-medium">Keras</span>
                </div>
                
                <div className="glass-morphism p-4 rounded-lg flex items-center justify-center flex-col">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-12 w-12 mb-2" alt="Git" />
                  <span className="text-xs font-medium">Git</span>
                </div>
              </div>
              
              <h3 className="text-xl font-display mt-12 mb-6">Research Interests</h3>
              
              <div className="glass-morphism p-6 rounded-xl">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span> Bio-inspired computing</span>
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
                    <span>Spiking Neural Networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Energy-based models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Natural Language Processing</span>
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
