
import React from "react";

const Header = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
        <h1 className="font-display mb-6">The Story So Far</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know my background, skills, and the journey that led me to become a data scientist
          specializing in machine learning and its creative applications.
        </p>
      </div>
    </section>
  );
};

export default Header;
