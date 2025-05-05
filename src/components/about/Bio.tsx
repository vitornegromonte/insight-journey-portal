
import React from "react";

const Bio = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-16 section-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="aspect-square w-full max-w-md rounded-xl overflow-hidden border border-accent/20 transition-all duration-300 hover:scale-102 hover:shadow-lg">
                <img 
                  src="crew.jpg" 
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
              Undergraduate Statistics student at the Federal University of Pernambuco (UFPE), with a focus on machine learning. Served as a teaching assistant for Computational Creativity and Introduction to Deep Learning, under professors Filipe Calegario and Tsang Ing Ren, respectively.
            </p>
            <p className="text-muted-foreground mb-4">
              As a sophomore, joined the National Institute of Software Engineering as an undergraduate researcher in Human-Computer Interaction (Smart Cities and IoT group). Advised by professor Kiev Gama, co-advised by Ana Paula Chaves (NAU) and Danilo Ribeiro (Cesar School). Co-authored papers accepted at IHC 2024 and SBSI 2025 (Brazilian Computer Society conferences).
            </p>
            <p className="text-muted-foreground mb-4">
              Joined the Geraia research group (with professors Filipe Calegario, Giordano Cabral, and André Neves). Researching Generative AI, evaluating Portuguese Language Models (LLMs) for performance, scalability, and adaptability to emergent languages. Also investigating energy-efficient AI and optimizing models for low-resource device deployment.
            </p>
            <p className="text-muted-foreground mb-4">
              Co-founded the Artificial Intelligence League of the Federal University of Pernambuco (LIGIA). As Outreach Director, I build partnerships (groups, companies, government), organize AI events across various fields, and create educational materials for the community. Collaborated with professors George DC Cavalcanti, Adiel Filho, and Tsang Ing Ren.
            </p>
            <p className="text-muted-foreground mb-4">
              Co-founded the start-up redduo.ai, serving as Chief Data Officer/co-Chief Technology Officer before departing within the first year.
            </p>
            <p className="text-muted-foreground">
              Beyond research, I enjoy photography, reading, sports, and creative coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Bio.displayName = "Bio";

export default Bio;
