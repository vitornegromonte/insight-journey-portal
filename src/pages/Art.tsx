
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/Sidebar";
import ArtCard from "@/components/ArtCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Art = () => {
  const [selectedArt, setSelectedArt] = useState<null | {
    title: string;
    image: string;
    technique: string;
    year: string;
    description?: string;
  }>(null);
  
  const [filter, setFilter] = useState("all");
  
  const handleArtClick = (art: any) => {
    setSelectedArt(art);
  };
  
  const artworks = [
    {
      id: 1,
      title: "Neural Dreams #1",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      technique: "GAN",
      year: "2023",
      description: "A neural network-generated landscape inspired by abstract expressionism. Created using a custom GAN architecture trained on landscape paintings.",
      category: "gan"
    },
    {
      id: 2,
      title: "Diffusion Patterns",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      technique: "Stable Diffusion",
      year: "2023",
      description: "Created using a fine-tuned Stable Diffusion model with custom prompts focusing on color theory and visual rhythm.",
      category: "diffusion"
    },
    {
      id: 3,
      title: "Algorithmic Landscape",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      technique: "StyleGAN",
      year: "2022",
      description: "A series exploring the capabilities of StyleGAN to generate novel landscape compositions that exist between realism and abstraction.",
      category: "gan"
    },
    {
      id: 4,
      title: "Fractal Composition",
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
      technique: "Fractal Art",
      year: "2022",
      description: "Generated using custom fractal algorithms with parameters mapped to music inputs, creating visual representations of audio patterns.",
      category: "fractal"
    },
    {
      id: 5,
      title: "Neural Abstraction",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      technique: "BigGAN",
      year: "2022",
      description: "An exploration of abstract color fields using BigGAN with class vector manipulation to create smooth transitions between concepts.",
      category: "gan"
    },
    {
      id: 6,
      title: "Quantum Dreams",
      image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      technique: "Diffusion Model",
      year: "2023",
      description: "Inspired by quantum physics visualizations, this piece uses diffusion models to create representations of quantum probability fields.",
      category: "diffusion"
    },
    {
      id: 7,
      title: "Digital Brushstrokes",
      image: "https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technique: "Neural Style Transfer",
      year: "2021",
      description: "A study in neural style transfer using custom loss functions to better preserve structural elements while transferring stylistic elements.",
      category: "style-transfer"
    },
    {
      id: 8,
      title: "Emergent Patterns",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technique: "Generative Adversarial Network",
      year: "2022",
      description: "This work explores how complex patterns emerge from simple rules in GAN training, with special attention to mode collapse as an artistic element.",
      category: "gan"
    },
  ];
  
  const categories = [
    { id: "all", name: "All Works" },
    { id: "gan", name: "GAN" },
    { id: "diffusion", name: "Diffusion Models" },
    { id: "fractal", name: "Fractal Art" },
    { id: "style-transfer", name: "Style Transfer" },
  ];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="bg-dark min-h-screen">
      <Sidebar />
      
      <main className="ml-16 md:ml-60 p-8">
        <div className="pt-8 pb-16">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Portfolio</span>
          <h1 className="text-gradient font-display text-3xl md:text-4xl mb-4">AI Art Gallery</h1>
          <p className="text-muted-foreground max-w-2xl">
            Exploring the intersection of artificial intelligence and artistic expression
            through generative algorithms and creative coding.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredArtworks.map(artwork => (
                <ArtCard 
                  key={artwork.id}
                  title={artwork.title}
                  image={artwork.image}
                  technique={artwork.technique}
                  year={artwork.year}
                  onClick={() => handleArtClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Dialog open={!!selectedArt} onOpenChange={(open) => !open && setSelectedArt(null)}>
        <DialogContent className="bg-black/90 border-white/10 text-white max-w-3xl">
          {selectedArt && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-md">
                <img 
                  src={selectedArt.image} 
                  alt={selectedArt.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display mb-2">{selectedArt.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <span>{selectedArt.technique}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span>{selectedArt.year}</span>
                </div>
                <p className="text-muted-foreground">{selectedArt.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Art;
