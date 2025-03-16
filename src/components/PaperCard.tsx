
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink } from "lucide-react";

interface PaperCardProps {
  title: string;
  authors: string;
  conference: string;
  year: string;
  abstract: string;
  tags: string[];
  pdfUrl: string;
}

const PaperCard = ({
  title,
  authors,
  conference,
  year,
  abstract,
  tags,
  pdfUrl,
}: PaperCardProps) => {
  return (
    <Card className="bg-black/40 border border-white/10 overflow-hidden hover-card">
      <div className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <CalendarDays size={14} />
          <span>{year}</span>
          <span className="px-2 text-muted-foreground/50">•</span>
          <span>{conference}</span>
        </div>
        
        <h3 className="text-xl font-display mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{authors}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{abstract}</p>
        
        <Button asChild>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <span>Read Paper</span>
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default PaperCard;
