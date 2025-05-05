
import React from "react";
import { Separator } from "@/components/ui/separator";

interface SectionItem {
  title: string;
  period: string;
  organization: string;
  description: string;
}

interface SectionProps {
  title: string;
  items: SectionItem[];
}

const ExperienceItem = ({ title, period, organization, description }: SectionItem) => (
  <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-xl font-medium">{title}</h4>
      <span className="text-accent">{period}</span>
    </div>
    <p className="text-muted-foreground mb-2">{organization}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const Section = ({ title, items }: SectionProps) => (
  <div>
    <h3 className="text-xl font-display mb-6">{title}</h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <ExperienceItem
          key={index}
          title={item.title}
          period={item.period}
          organization={item.organization}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

const Education = React.forwardRef<HTMLDivElement>((props, ref) => {
  const educationItems = [
    {
      title: "B.Sc. in Statistics",
      period: "2022 - Present",
      organization: "Federal University of Pernambuco",
      description: "Major in Statistics but with research focus on machine learning and computational intelligence.",
    },
  ];

  const professionalItems = [
    {
      title: "Researcher",
      period: "2023 - Present",
      organization: "Geraia, Federal University of Pernambuco",
      description: "Conducting research in Generative AI, focusing on evaluating Language Models in Portuguese for performance, scalability, and adaptability in emergent languages. Investigating energy-efficient AI for sustainable training and inference, optimizing generative models for deployment on low-resource devices.",
    },
    {
      title: "Co-founder and Data Scientist",
      period: "2023 - 2024",
      organization: "redduo.ai",
      description: "Worked as a Data Scientist, conducting data analysis to support business intelligence initiatives and developing software automations. Additionally served as an AI Scientist, contributing to the development of core AI models with a focus on optimization and performance enhancement.",
    },
    {
      title: "Undegraduate Researcher",
      period: "2023 - 2024",
      organization: "National Institute of Software Engineering (INES)",
      description: "While working at the Brazilian Ministry of Science and Technology - National Institute of Software Engineering I have assisted in developing quantitative tools for analysis and enhancing accessibility techniques for apps designed to support adults on the autism spectrum.",
    },
  ];

  const extracurricularItems = [
    {
      title: "Co-founder and Outreach Director",
      period: "2024 - Present",
      organization: "Ligia",
      description: "Ligia is an AI league at the Federal University of Pernambuco, affiliated with the pioneering CIn.AI research group. As Outreach Director, I focus on building partnerships, organizing AI-focused events, and developing educational materials to promote AI across various fields.",
    },
  ];

  const teachingItems = [
    {
      title: "Introduction to Deep Learning",
      period: "2024 - Present",
      organization: "Federal University of Pernambuco",
      description: "Taught fundamental Deep Learning concepts, covering Recurrent Neural Networks (RNNs), Convolutional Neural Networks (CNNs), and Transformer architectures.",
    },
    {
      title: "Computational Creativity",
      period: "2023 - Present",
      organization: "Federal University of Pernambuco",
      description: "Assisted in a Computational Creativity course that investigated the use of Generative AI (Diffusion Models, LLMs) in creative applications.",
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-dark-accent section-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display mb-10 text-center">Education & Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Section title="Education" items={educationItems} />
          </div>
          
          <Separator className="my-12 bg-white/10" />
          
          <div>
            <Section title="Professional Experience" items={professionalItems} />
          </div>

          <Separator className="my-12 bg-white/10" />

          <div>
            <Section title="Extracurricular" items={extracurricularItems} />
          </div>

          <Separator className="my-12 bg-white/10" />

          <div>
            <Section title="Teaching" items={teachingItems} />
          </div>
        </div>
      </div>
    </section>
  );
});

Education.displayName = "Education";

export default Education;
