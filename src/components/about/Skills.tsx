
import React from "react";

interface SkillItem {
  icon: string;
  name?: string;
}

interface SkillsGroupProps {
  title: string;
  items: SkillItem[];
  showLabels?: boolean;
}

const SkillsGroup = ({ title, items, showLabels = false }: SkillsGroupProps) => (
  <div>
    <h3 className="text-xl font-display mb-6">{title}</h3>
    <div className={`grid grid-cols-4 ${showLabels ? 'sm:grid-cols-6' : ''} gap-4`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`glass-morphism p-4 rounded-lg flex items-center justify-center ${showLabels ? 'flex-col' : ''} transition-all duration-300 hover:bg-accent/0 hover:scale-105 hover:shadow-lg`}
        >
          <img 
            src={item.icon} 
            className={`${showLabels ? 'h-12 w-12 mb-2' : 'h-16 w-16'}`} 
            alt={item.name || "Skill"} 
          />
          {showLabels && item.name && <span className="text-xs font-medium">{item.name}</span>}
        </div>
      ))}
    </div>
  </div>
);

const ResearchInterests = () => (
  <div>
    <h3 className="text-xl font-display mt-12 mb-6">Research Interests</h3>
    <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:bg-accent/0 hover:shadow-lg">
      <ul className="space-y-2 text-muted-foreground grid grid-cols-2 sm:grid-cols-2">
        {[
          "Bio-inspired computing", 
          "AI for Creative Applications", 
          "Computer Vision & Image Processing", 
          "Spiking Neural Networks", 
          "Energy-based models", 
          "Natural Language Processing"
        ].map((interest, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span> {interest}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  const programmingLanguages = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-plain.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" },
  ];

  const toolsAndFrameworks = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", name: "Scikit-learn" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", name: "NumPy" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", name: "Matplotlib" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", name: "Git" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreeSQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", name: "FastAPI" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg", name: "Plotly" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", name: "OpenCV" },
  ];

  return (
    <section ref={ref} className="py-16 section-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display mb-10 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <SkillsGroup title="Programming Languages" items={programmingLanguages} />
          
          <div>
            <SkillsGroup title="Tools & Frameworks" items={toolsAndFrameworks} showLabels={true} />
            <ResearchInterests />
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
