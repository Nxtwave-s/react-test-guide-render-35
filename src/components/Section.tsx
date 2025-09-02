
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
}

const Section = ({ id, title, children, isActive }: SectionProps) => {
  return (
    <section 
      id={id}
      className="min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="w-full max-w-4xl">
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold mb-12 transition-opacity duration-500 font-mono",
            isActive ? "opacity-100" : "opacity-50"
          )}
        >
          {title}
        </h2>
        <div 
          className={cn(
            "transition-all duration-500",
            isActive ? "opacity-100 transform translate-y-0" : "opacity-50 transform translate-y-4"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
