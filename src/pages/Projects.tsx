
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/ProjectsData";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Extract unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;
  
  return (
    <div className="bg-white min-h-screen">
      <main className="p-8 pt-4">
        <div className="pt-8 pb-12">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">My Work</span>
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-4">Projects</h1>
          <p className="text-gray-600 max-w-2xl">
            Browse through my research projects and applications in AI, machine learning, and data science.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === null ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === tag ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className="h-full"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
