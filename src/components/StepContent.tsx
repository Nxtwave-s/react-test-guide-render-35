import React from "react";
import CodeExample from "@/components/CodeExample";
import MethodTable from "@/components/MethodTable";
import VariantTable from "@/components/VariantTable";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StepContentProps {
  step: number;
}

const StepContent = ({ step }: StepContentProps) => {
  switch (step) {
    case 0:
      return <RenderingStep />;
    case 1:
      return <RenderFunctionStep />;
    case 2:
      return <QueryMethodsStep />;
    case 3:
      return <QueryVariantsStep />;
    default:
      return <div>Step not found</div>;
  }
};

const RenderingStep = () => (
  <div>
    <h2 className="text-3xl font-bold mb-8 font-mono border-b pb-2">2.1 Rendering Components with RTL</h2>
    
    <div className="space-y-6">
      <p className="text-xl">
        Rendering a component means showing it inside a fake web page (a virtual test area) where you can check and use it.
      </p>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 font-mono">2.1.1 The render() Function</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-bold mb-4 font-mono">What it does:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">Entry point for testing a React component.</li>
              <li className="text-lg">Displays your component on a test screen, enabling interaction like a real user.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-bold mb-4 font-mono">What render() Returns:</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3 text-sm">container:</span>
                <span>The main area (div) where your component appears</span>
              </li>
              <li className="flex items-start">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3 text-sm">debug():</span>
                <span>Shows the current screen in the console (for fixing issues)</span>
              </li>
              <li className="flex items-start">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3 text-sm">query methods:</span>
                <span>Helps you find things like buttons or text in the component</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RenderFunctionStep = () => (
  <div>
    <h2 className="text-3xl font-bold mb-8 font-mono border-b pb-2">2.2 Query Methods</h2>
    
    <p className="text-lg mb-6">
      Query methods help locate elements inside your rendered component by different criteria. 
      They are an essential part of testing React components with RTL.
    </p>

    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 font-mono">Common Query Methods with Priority:</h3>
      <MethodTable />
    </div>
  </div>
);

const QueryMethodsStep = () => (
  <div>
    <h2 className="text-3xl font-bold mb-8 font-mono border-b pb-2">2.3 Query Variants</h2>
    
    <p className="text-lg mb-6">
      Query variants determine the behavior of query methods based on what you need - whether 
      to throw errors, return null values, or handle multiple elements.
    </p>

    <h3 className="text-xl font-bold mb-4 font-mono">Query Variants Behavior Table:</h3>
    <VariantTable />
  </div>
);

const QueryVariantsStep = () => (
  <div>
    <h2 className="text-3xl font-bold mb-8 font-mono border-b pb-2">2.4 The screen Object</h2>
    
    <p className="text-lg mb-6">
      The screen object is a built-in tool from React Testing Library that lets you find elements on the page (like buttons, text, or inputs) without extra setup. It makes your test code cleaner and easier to write.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-xl font-bold mb-4 font-mono">Example Usage:</h3>
        <CodeExample
          code={`import { render, screen } from '@testing-library/react';

it('using screen', () => {
  render(<Button>Submit</Button>);
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});`}
        />
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 font-mono">Without screen:</h3>
        <CodeExample
          code={`import { render } from '@testing-library/react';

it('without screen', () => {
  const { getByRole } = render(<Button>Submit</Button>);
  const button = getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});`}
        />
      </div>
    </div>

    <h3 className="text-xl font-bold mt-8 mb-4 font-mono">Benefits of the screen Object:</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <Card className="border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold mb-2">Cleaner code</h4>
        <p>No need to destructure query functions from render result.</p>
        <p className="text-sm text-gray-500 mt-2">More readable and maintainable tests</p>
      </Card>
      
      <Card className="border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold mb-2">Automatic document search</h4>
        <p>All queries automatically bound to document.</p>
        <p className="text-sm text-gray-500 mt-2">No need to manage query scope</p>
      </Card>
      
      <Card className="border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold mb-2">Better readability</h4>
        <p>Makes tests more concise and easier to understand.</p>
        <p className="text-sm text-gray-500 mt-2">Improved code clarity</p>
      </Card>
      
      <Card className="border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold mb-2">Consistent access</h4>
        <p>Available throughout your test regardless of render scope.</p>
        <p className="text-sm text-gray-500 mt-2">Works across describe blocks and callbacks</p>
      </Card>
    </div>
  </div>
);

export default StepContent;
