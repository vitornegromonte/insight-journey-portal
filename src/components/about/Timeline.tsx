
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible";

const TimelineItem = ({ 
  date, 
  title, 
  subtitle, 
  content 
}: { 
  date: string; 
  title: string; 
  subtitle: string; 
  content: string;
}) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-accent/50 bg-dark flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-accent"></div>
      </div>
      <div className="glass-morphism p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        <time className="mb-1 text-sm font-normal leading-none text-accent flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {date}
        </time>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
        <Collapsible className="mt-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="px-0">
              <span className="text-xs text-accent">Read more</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <p className="text-sm text-muted-foreground">{content}</p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

const Timeline = React.forwardRef<HTMLDivElement>((props, ref) => {
  const timelineItems = [
    {
      date: "2022 - Present",
      title: "B.Sc. in Statistics",
      subtitle: "Federal University of Pernambuco",
      content: "Major in Statistics with research focus on machine learning and computational intelligence. Participating in various research projects and academic initiatives."
    },
    {
      date: "2023 - Present",
      title: "Researcher at Geraia",
      subtitle: "Federal University of Pernambuco",
      content: "Conducting research in Generative AI, focusing on evaluating Language Models in Portuguese for performance, scalability, and adaptability in emergent languages."
    },
    {
      date: "2023 - 2024",
      title: "Undergraduate Researcher",
      subtitle: "National Institute of Software Engineering (INES)",
      content: "Assisted in developing quantitative tools for analysis and enhancing accessibility techniques for apps designed to support adults on the autism spectrum."
    },
    {
      date: "2023 - 2024",
      title: "Co-founder and Data Scientist",
      subtitle: "redduo.ai",
      content: "Worked as a Data Scientist, conducting data analysis to support business intelligence initiatives and developing software automations."
    },
    {
      date: "2024 - Present",
      title: "Co-founder and Outreach Director",
      subtitle: "Ligia",
      content: "Building partnerships, organizing AI-focused events, and developing educational materials to promote AI across various fields."
    }
  ];

  return (
    <section ref={ref} className="py-16 section-fade-in bg-dark-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display mb-10 text-center">My Timeline</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-accent/50 pl-6 ml-4 md:ml-6">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Timeline.displayName = "Timeline";

export default Timeline;
