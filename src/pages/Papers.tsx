
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaperCard from "@/components/PaperCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Papers = () => {
  const papersRef = useRef<HTMLDivElement>(null);
  const talksRef = useRef<HTMLDivElement>(null);
  
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

    const sections = [papersRef.current, talksRef.current];
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

  const papers = [
    {
      id: 1,
      title: "Generative Adversarial Networks for Creative Image Synthesis: A Comparative Study",
      authors: "Gus Anderson, Jane Doe, John Smith",
      conference: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      abstract: "This paper presents a comprehensive analysis of different GAN architectures for creative image synthesis, with a focus on controllability and artistic expressiveness. We compare StyleGAN, VQGAN, and other modern architectures on metrics including FID score and user preference studies.",
      tags: ["GAN", "Image Synthesis", "Deep Learning"],
      pdfUrl: "https://example.com/paper1.pdf"
    },
    {
      id: 2,
      title: "Explainable AI in Medical Imaging: Towards Transparent Diagnostic Tools",
      authors: "Gus Anderson, Maria Rodriguez, et al.",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2022",
      abstract: "We propose a novel approach to explainable AI in medical imaging that provides intuitive visual explanations for diagnostic decisions while maintaining high accuracy. Our method combines gradient-based attribution techniques with semantic segmentation to highlight relevant anatomical regions.",
      tags: ["XAI", "Medical Imaging", "Computer Vision"],
      pdfUrl: "https://example.com/paper2.pdf"
    },
    {
      id: 3,
      title: "Neural Networks for Artistic Style Transfer: Beyond Photorealism",
      authors: "Gus Anderson, Robert Johnson",
      conference: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2022",
      abstract: "This work extends neural style transfer beyond photorealistic applications, introducing novel loss functions that better preserve the creative intent of artistic styles. We demonstrate improved results on abstract art styles that previous methods struggled to capture faithfully.",
      tags: ["Neural Style Transfer", "Computer Vision", "AI Art"],
      pdfUrl: "https://example.com/paper3.pdf"
    },
    {
      id: 4,
      title: "Attention Mechanisms for Time Series Analysis in Financial Markets",
      authors: "Gus Anderson, Sarah Williams, et al.",
      conference: "International Conference on Financial Engineering",
      year: "2021",
      abstract: "We introduce a novel attention-based architecture for analyzing financial time series data that outperforms traditional LSTM and GRU models on market prediction tasks. Our model effectively captures long-range dependencies and provides interpretable attention maps for decision support.",
      tags: ["Time Series", "Attention Mechanisms", "Financial ML"],
      pdfUrl: "https://example.com/paper4.pdf"
    },
    {
      id: 5,
      title: "Human-AI Collaboration in Creative Processes: A Framework for Evaluation",
      authors: "Gus Anderson, Emily Chen, David Kim",
      conference: "ACM Conference on Human Factors in Computing Systems (CHI)",
      year: "2021",
      abstract: "This paper proposes a comprehensive framework for evaluating human-AI collaborative systems in creative domains. We define metrics across dimensions of creative output quality, user agency, and system usability, providing a standardized approach for comparing different collaborative AI systems.",
      tags: ["Human-AI Collaboration", "Creativity", "Evaluation"],
      pdfUrl: "https://example.com/paper5.pdf"
    },
    {
      id: 6,
      title: "Improving Robustness of Deep Learning Models Against Adversarial Attacks",
      authors: "Gus Anderson, Michael Lee",
      conference: "AAAI Conference on Artificial Intelligence",
      year: "2020",
      abstract: "We present a novel defense mechanism against adversarial attacks on deep neural networks that combines adaptive data augmentation with regularization techniques. Our approach demonstrates improved robustness across multiple attack vectors while maintaining performance on clean data.",
      tags: ["Adversarial ML", "Security", "Deep Learning"],
      pdfUrl: "https://example.com/paper6.pdf"
    },
  ];

  const talks = [
    {
      id: 1,
      title: "The Future of Creative AI: Opportunities and Challenges",
      event: "TEDx Technology Conference",
      location: "San Francisco, CA",
      date: "October 2023",
      description: "Explored the current state and future directions of AI in creative fields, discussing ethical considerations and the changing nature of human-machine collaboration in art, music, and design.",
      videoUrl: "https://example.com/talk1",
      slidesUrl: "https://example.com/slides1"
    },
    {
      id: 2,
      title: "Explainable AI for Scientific Discovery",
      event: "AI Research Summit",
      location: "Virtual Event",
      date: "August 2023",
      description: "Presented research on making complex AI models more interpretable for domain experts in scientific fields, with case studies in medicine and materials science.",
      videoUrl: "https://example.com/talk2",
      slidesUrl: "https://example.com/slides2"
    },
    {
      id: 3,
      title: "Neural Networks as Creative Tools",
      event: "International Symposium on Digital Art",
      location: "Tokyo, Japan",
      date: "May 2023",
      description: "Discussed how neural networks can be designed and fine-tuned to serve as tools for artistic expression, with live demonstrations of custom generative models.",
      videoUrl: "https://example.com/talk3",
      slidesUrl: "https://example.com/slides3"
    },
    {
      id: 4,
      title: "Data Visualization for Machine Learning Insights",
      event: "DataViz Conference",
      location: "Berlin, Germany",
      date: "March 2023",
      description: "Showcased novel techniques for visualizing the internal representations and decision processes of complex machine learning models to aid in debugging and transparency.",
      videoUrl: "https://example.com/talk4",
      slidesUrl: "https://example.com/slides4"
    },
  ];

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Research</span>
          <h1 className="text-gradient font-display mb-6">Papers & Talks</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My published research in machine learning, computer vision, and computational creativity,
            along with presentations and invited talks at conferences and events.
          </p>
        </div>
      </section>
      
      {/* Tabs Navigation */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="papers" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="glass-morphism p-1">
                <TabsTrigger 
                  value="papers"
                  className="data-[state=active]:bg-accent/20"
                >
                  Academic Papers
                </TabsTrigger>
                <TabsTrigger 
                  value="talks"
                  className="data-[state=active]:bg-accent/20"
                >
                  Talks & Presentations
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Papers Tab */}
            <TabsContent value="papers" className="mt-0">
              <section ref={papersRef} className="py-8 section-fade-in">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {papers.map(paper => (
                      <PaperCard 
                        key={paper.id}
                        title={paper.title}
                        authors={paper.authors}
                        conference={paper.conference}
                        year={paper.year}
                        abstract={paper.abstract}
                        tags={paper.tags}
                        pdfUrl={paper.pdfUrl}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>
            
            {/* Talks Tab */}
            <TabsContent value="talks" className="mt-0">
              <section ref={talksRef} className="py-8 section-fade-in">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    {talks.map(talk => (
                      <div key={talk.id} className="glass-morphism p-6 rounded-xl hover-card">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/4">
                            <div className="aspect-video bg-black/40 rounded-lg overflow-hidden flex items-center justify-center">
                              <svg className="w-12 h-12 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          
                          <div className="md:w-3/4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h3 className="text-xl font-display">{talk.title}</h3>
                              <span className="text-accent text-sm">{talk.date}</span>
                            </div>
                            
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                              <span>{talk.event}</span>
                              <span className="px-2 text-muted-foreground/30">•</span>
                              <span>{talk.location}</span>
                            </div>
                            
                            <p className="text-muted-foreground mb-6">{talk.description}</p>
                            
                            <div className="flex flex-wrap gap-4">
                              {talk.videoUrl && (
                                <a 
                                  href={talk.videoUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Watch Presentation
                                </a>
                              )}
                              
                              {talk.slidesUrl && (
                                <a 
                                  href={talk.slidesUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  View Slides
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Papers;
