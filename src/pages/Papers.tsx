
import { useState } from "react";
import PaperCard from "@/components/PaperCard";
import Footer from "@/components/Footer";

// Paper data interface
interface Paper {
  id: number;
  title: string;
  authors: string;
  conference: string;
  year: string;
  abstract: string;
  tags: string[];
  pdfUrl: string;
}

// Talk data interface
interface Talk {
  id: number;
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  slidesUrl: string;
}

// Sample papers data
const papers: Paper[] = [
  {
    id: 1,
    title: "Multi-Agent Systems for Research Paper Recommendations",
    authors: "Vitor Negromonte, John Doe, Jane Smith",
    conference: "NeurIPS",
    year: "2023",
    abstract: "We present a multi-agent system that uses large language models to scan, filter, and recommend research papers based on user interests. Our system achieves 87% accuracy in identifying relevant papers according to user feedback.",
    tags: ["Multi-Agent Systems", "NLP", "Recommender Systems"],
    pdfUrl: "https://arxiv.org/pdf/2303.18223.pdf"
  },
  {
    id: 2,
    title: "Computer Vision Approaches for Parkinson's Disease Detection",
    authors: "Vitor Negromonte, Alice Johnson, Bob Brown",
    conference: "CVPR",
    year: "2022",
    abstract: "This paper presents a novel computer vision approach to detect Parkinson's disease through analysis of hand-drawn spirals. Our CNN-based method achieves 95% accuracy, outperforming previous approaches by 10%.",
    tags: ["Computer Vision", "Healthcare", "CNN"],
    pdfUrl: "https://arxiv.org/pdf/2303.18223.pdf"
  },
  {
    id: 3,
    title: "Attention Mechanisms in Breast Cancer Detection from Mammograms",
    authors: "Vitor Negromonte, Sarah Williams, David Chen",
    conference: "MICCAI",
    year: "2021",
    abstract: "We propose a specialized attention mechanism for mammogram analysis that significantly improves the detection of subtle indicators of breast cancer. Our approach achieves a 92% sensitivity rate while maintaining high specificity.",
    tags: ["Medical Imaging", "Deep Learning", "Attention Mechanisms"],
    pdfUrl: "https://arxiv.org/pdf/2303.18223.pdf"
  }
];

// Sample talks data
const talks: Talk[] = [
  {
    id: 1,
    title: "Building Multi-Agent Systems with LLMs",
    event: "AI Research Conference",
    location: "San Francisco, CA",
    date: "May 2023",
    description: "A presentation on the architecture and implementation of multi-agent systems using large language models for research paper recommendations.",
    slidesUrl: "/path/to/slides.pdf"
  },
  {
    id: 2,
    title: "Computer Vision in Healthcare",
    event: "Medical AI Summit",
    location: "Boston, MA",
    date: "November 2022",
    description: "An overview of computer vision applications in healthcare, with a focus on neurological disorder detection and diagnosis.",
    slidesUrl: "/path/to/slides.pdf"
  }
];

// Papers page component
const Papers = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'talks'>('papers');
  const [paperFilter, setPaperFilter] = useState<string | null>(null);
  
  // Extract unique tags from all papers
  const allTags = [...new Set(papers.flatMap(paper => paper.tags))];
  
  // Filter papers based on selected tag
  const filteredPapers = paperFilter 
    ? papers.filter(paper => paper.tags.includes(paperFilter))
    : papers;
  
  return (
    <div className="bg-white min-h-screen">
      <main className="p-8">
        <div className="pt-8 pb-16">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Research</span>
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-4">Papers & Talks</h1>
          <p className="text-gray-600 max-w-2xl">
            Published research papers and conference presentations in artificial intelligence, computer vision, and healthcare applications.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex border-b mb-8">
          <button
            onClick={() => setActiveTab('papers')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'papers' 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Research Papers
          </button>
          <button
            onClick={() => setActiveTab('talks')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'talks' 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Conference Talks
          </button>
        </div>
        
        {/* Papers content */}
        {activeTab === 'papers' && (
          <>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPaperFilter(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    paperFilter === null ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Topics
                </button>
                
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setPaperFilter(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      paperFilter === tag ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {filteredPapers.map(paper => (
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
          </>
        )}
        
        {/* Talks content */}
        {activeTab === 'talks' && (
          <div className="grid grid-cols-1 gap-6">
            {talks.map(talk => (
              <div key={talk.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-display text-gray-900 mb-2">{talk.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span className="font-medium">{talk.event}</span>
                  <span className="mx-2">•</span>
                  <span>{talk.location}</span>
                  <span className="mx-2">•</span>
                  <span>{talk.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{talk.description}</p>
                <a
                  href={talk.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline gap-1 text-sm font-medium"
                >
                  View Slides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Papers;
