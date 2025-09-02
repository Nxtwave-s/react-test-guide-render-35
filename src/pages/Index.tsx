
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import QueryTable from "@/components/QueryTable";
import VariantTable from "@/components/VariantTable";
import CheckList from "@/components/CheckList";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = 6;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = window.innerHeight;
      
      // Calculate which section should be active based on scroll position
      const newActiveSection = Math.min(
        Math.floor(position / (height * 0.8)),
        sections - 1
      );
      
      setActiveSection(newActiveSection);
      
      if (position > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-10">
        <Header 
          title="Rendering Components with RTL" 
          subtitle="Learn how to test your React components like a real user using render(), query methods, and the screen object — powered by React Testing Library."
        />
        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown size={32} />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>

      {/* What is Rendering Section */}
      <Section 
        id="what-is-rendering" 
        title="What is Rendering?" 
        isActive={activeSection === 1}
      >
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Rendering a component means mounting it into a virtual test DOM so we can simulate user interaction in a test environment.
          </p>
          <p className="text-lg mb-8">
            React Testing Library helps us render components and verify the behavior as if a user were interacting with it.
          </p>
          <CheckList
            items={[
              "Enables real-user-like testing",
              "Avoids testing internal implementation details",
              "Focuses on accessible user behavior"
            ]}
          />
        </div>
      </Section>

      {/* The render() Function Section */}
      <Section 
        id="render-function" 
        title="The render() Function" 
        isActive={activeSection === 2}
      >
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            The <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">render()</code> function is the main utility provided by RTL to render React components during testing.
          </p>
          <p className="text-lg mb-8">
            It sets up the DOM and gives us useful tools to interact with what's on screen.
          </p>

          <h3 className="text-xl font-medium mb-4 font-mono">Key Features:</h3>
          <ul className="list-disc list-inside mb-8 space-y-2 pl-2">
            <li className="mb-2">Mounts your component into the DOM</li>
            <li className="mb-2">Returns utilities to query elements</li>
            <li className="mb-2">Enables user-focused testing</li>
          </ul>

          <h3 className="text-xl font-medium mb-4 font-mono">Example:</h3>
          <CodeExample 
            code={`import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders welcome message', () => {
  render(<Welcome />);
  const heading = screen.getByText('Welcome to React Testing');
  expect(heading).toBeInTheDocument();
});`}
          />
        </div>
      </Section>

      {/* What render() Returns Section */}
      <Section 
        id="render-returns" 
        title="What render() Returns" 
        isActive={activeSection === 3}
      >
        <div className="max-w-3xl">
          <ul className="mb-8 space-y-6">
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">container:</span> 
              <span>the root DOM node of the rendered component</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">debug():</span> 
              <span>logs the current virtual DOM to the console</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">query methods:</span> 
              <span>lets you find elements by role, text, label, etc.</span>
            </li>
          </ul>
          
          <p className="text-lg mt-6">
            You can use these returned utilities for debugging or interacting with the rendered output.
          </p>
        </div>
      </Section>

      {/* Common Query Methods Section */}
      <Section 
        id="query-methods" 
        title="Common Query Methods" 
        isActive={activeSection === 4}
      >
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Query methods help locate elements in the component's output by various attributes.
          </p>
          <p className="text-lg mb-8">
            These are the most commonly used:
          </p>

          <QueryTable />

          <div className="mt-8">
            <p className="flex items-center">
              <span className="text-green-600 mr-3 font-mono">✓</span>
              <span>Prefer semantic queries like getByRole for better accessibility.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Query Variants Section */}
      <Section 
        id="query-variants" 
        title="Query Variants Explained" 
        isActive={activeSection === 5}
      >
        <div className="max-w-3xl">
          <p className="text-lg mb-8">
            Query methods come in different variants depending on how and when you want to search for elements.
          </p>
          
          <VariantTable />

          <div className="mt-8">
            <p className="flex items-center">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3 font-mono">📌</span>
              <span>Use findBy and findAllBy for asynchronous elements (like content loaded after an API call).</span>
            </p>
          </div>
        </div>
      </Section>

      {/* The screen Object Section */}
      <Section 
        id="screen-object" 
        title="The screen Object" 
        isActive={activeSection === 6}
      >
        <div className="max-w-3xl">
          <p className="text-lg mb-8">
            The screen object is a global utility that simplifies querying rendered components without needing to destructure from render().
          </p>

          <h3 className="text-xl font-medium mb-4 font-mono">Example:</h3>
          <CodeExample 
            code={`import { render, screen } from '@testing-library/react';

test('uses screen', () => {
  render(<button>Submit</button>);
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});`}
          />
          
          <h3 className="text-xl font-medium mt-8 mb-4 font-mono">Benefits:</h3>
          <ul className="grid grid-cols-2 gap-4 mb-8">
            <li className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">Cleaner code</li>
            <li className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">Queries available globally</li>
            <li className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">Automatically scoped to document</li>
            <li className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">No destructuring needed</li>
          </ul>
        </div>
      </Section>

      {/* Footer section with navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-4">
          {Array.from({ length: sections }).map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                activeSection === idx ? "bg-black" : "bg-gray-300"
              )}
              onClick={() => {
                const sectionHeight = window.innerHeight * 0.8;
                window.scrollTo({
                  top: idx * sectionHeight,
                  behavior: 'smooth'
                });
              }}
              aria-label={`Go to section ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
