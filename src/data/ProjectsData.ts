
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LLM Portuguese Evaluation",
    description: "A comprehensive framework for evaluating language models specifically for Portuguese language understanding and generation.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["NLP", "Language Models", "Python", "TensorFlow"],
    githubUrl: "https://github.com/username/llm-portuguese-eval"
  },
  {
    id: 2,
    title: "Vector DB Retrieval System",
    description: "An optimized vector database system for efficient similarity search in high-dimensional spaces using probabilistic algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Vector Search", "FAISS", "Python", "Databases"],
    githubUrl: "https://github.com/username/vector-db-retrieval",
    liveUrl: "https://vector-demo.example.com"
  },
  {
    id: 3,
    title: "Neural Style Transfer App",
    description: "A web application that applies artistic styles to images using convolutional neural networks based on the neural style transfer technique.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    tags: ["Computer Vision", "CNN", "React", "PyTorch"],
    liveUrl: "https://neural-style.example.com"
  },
  {
    id: 4,
    title: "Portuguese Text Summarizer",
    description: "An extractive and abstractive text summarization tool specifically optimized for Portuguese language news articles and academic papers.",
    image: "https://images.unsplash.com/photo-1599583863916-e06c29087f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["NLP", "Transformers", "Python", "HuggingFace"],
    githubUrl: "https://github.com/username/pt-summarizer"
  },
  {
    id: 5,
    title: "AI Research Paper Analyzer",
    description: "A tool that uses NLP to analyze research papers, extract key findings, and generate visualizations of the research landscape.",
    image: "https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1079&q=80",
    tags: ["NLP", "Data Visualization", "Python", "D3.js"],
    githubUrl: "https://github.com/username/paper-analyzer"
  },
  {
    id: 6,
    title: "GANs for Medical Imaging",
    description: "Using generative adversarial networks to synthesize realistic medical images for data augmentation in healthcare machine learning applications.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["GANs", "Medical Imaging", "Healthcare AI", "PyTorch"],
    githubUrl: "https://github.com/username/medical-gans"
  }
];

export default projects;
