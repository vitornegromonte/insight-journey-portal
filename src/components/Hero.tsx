
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/60 via-transparent to-[#0F0F0F] z-10"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple/20 rounded-full filter blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue/20 rounded-full filter blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-20">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent/50 mb-6">
            <img 
              src="/lovable-uploads/ea0e9c56-b5f9-4957-992b-0a1060c1020e.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <span className="inline-block text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Data Scientist & Researcher
          </span>
          
          <h1 className="text-gradient font-display mb-4">
            Hey, I'm <span className="text-accent">Gus</span> 👋
          </h1>
          
          <p className="max-w-lg mx-auto text-muted-foreground mb-8">
            I'm a data scientist and AI researcher focusing on machine learning applications
            and the intersection of technology and art. Currently pursuing my PhD in
            Computer Science with a focus on neural networks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="font-medium">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-muted-foreground/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-fade-in" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
