
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/ProjectsData";
import Footer from "@/components/Footer";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";

const Projects = () => {
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Extract unique tags and categories from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const allCategories = [...new Set(projects.flatMap(project => project.categories))];
  
  // Filter projects based on selected tag and category
  const filteredProjects = projects.filter(project => {
    const matchesTag = tagFilter ? project.tags.includes(tagFilter) : true;
    const matchesCategory = categoryFilter ? project.categories.includes(categoryFilter) : true;
    return matchesTag && matchesCategory;
  });

  // Automatically open filters if a tag or category is selected
  useEffect(() => {
    if (tagFilter) {
      setIsFiltersOpen(true);
    }
  }, [tagFilter]);
  
  // Clear all filters function
  const clearFilters = () => {
    setTagFilter(null);
    setCategoryFilter(null);
  };
  
  return (
    <div className="bg-white min-h-screen">
      <main className="p-8">
        <div className="pt-8 pb-12">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">My Work</span>
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-4">Projects</h1>
          <p className="text-gray-600 max-w-2xl">
            Browse through my coding projects done in my free time.
          </p>
        </div>
        
        <div className="space-y-6 mb-8">
          {/* Filter stats and clear button */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">{filteredProjects.length}</span> of {projects.length} projects
            </p>
            
            {(tagFilter || categoryFilter) && (
              <button
                onClick={clearFilters}
                className="text-sm flex items-center text-gray-500 hover:text-accent transition-colors"
              >
                <X size={14} className="mr-1" /> Clear filters
              </button>
            )}
          </div>
          
          {/* Active filters display */}
          {(tagFilter || categoryFilter) && (
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {categoryFilter && (
                <Badge variant="outline" className="bg-accent/10 text-accent px-3 py-1 flex items-center gap-1">
                  Category: {categoryFilter}
                  <button onClick={() => setCategoryFilter(null)} className="ml-1 hover:text-accent/80">
                    <X size={14} />
                  </button>
                </Badge>
              )}
              
              {tagFilter && (
                <Badge variant="outline" className="bg-accent/10 text-accent px-3 py-1 flex items-center gap-1">
                  Technology: {tagFilter}
                  <button onClick={() => setTagFilter(null)} className="ml-1 hover:text-accent/80">
                    <X size={14} />
                  </button>
                </Badge>
              )}
            </div>
          )}
          
          {/* Categories filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === null ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    categoryFilter === category ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Technology filter */}
          <Collapsible 
            open={isFiltersOpen} 
            onOpenChange={setIsFiltersOpen}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">Filter by Technology</h3>
              <CollapsibleTrigger className="flex items-center text-sm font-medium text-accent hover:text-accent/70 transition-colors">
                <Filter size={16} className="mr-1" />
                {isFiltersOpen ? "Hide Technologies" : "Show Technologies"}
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4 overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setTagFilter(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    tagFilter === null ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Technologies
                </button>
                
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setTagFilter(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      tagFilter === tag ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              detailedDescription={project.detailedDescription}
              image={project.image}
              tags={project.tags}
              categories={project.categories}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className="h-full"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 border border-gray-100 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <button 
              onClick={clearFilters}
              className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
