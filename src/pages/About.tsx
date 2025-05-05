
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/about/Header";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";

const About = () => {
  // Refs for sections that will fade in
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [bioRef.current, educationRef.current, skillsRef.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Header />
      <Bio ref={bioRef} />
      <Education ref={educationRef} />
      <Skills ref={skillsRef} />
      <Footer />
    </div>
  );
};

export default About;
