
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink, FileText, Users } from "lucide-react";

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
    <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm mb-2">
          <div className="flex items-center">
            <CalendarDays size={14} className="mr-1" />
            <span>{year}</span>
          </div>
          <span className="px-1 text-gray-300">•</span>
          <span className="font-medium text-gray-600">{conference}</span>
        </div>
        
        <h3 className="text-lg font-medium font-display text-gray-900 mb-2 leading-tight group-hover:text-accent transition-colors">{title}</h3>
        
        <div className="flex items-start gap-2 mb-3">
          <Users size={14} className="mt-1 text-gray-500 flex-shrink-0" />
          <p className="text-gray-600 text-sm">{authors}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{abstract}</p>
        
        <div className="flex gap-3">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText size={14} />
              <span>PDF</span>
            </a>
          </Button>
          
          <Button asChild size="sm" className="gap-2">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              <span>Read Paper</span>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PaperCard;
