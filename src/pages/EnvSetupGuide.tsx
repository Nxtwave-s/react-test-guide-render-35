
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import StepContent from "@/components/StepContent";

const EnvSetupGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animation, setAnimation] = useState("");
  
  const steps = [
    {
      id: "rendering",
      title: "Rendering Components with RTL",
      progress: 25,
    },
    {
      id: "query-methods",
      title: "Query Methods",
      progress: 50,
    },
    {
      id: "query-variants",
      title: "Query Variants",
      progress: 75,
    },
    {
      id: "screen-object",
      title: "The screen Object",
      progress: 100,
    },
  ];

  useEffect(() => {
    setAnimation("animate-fade-in");
    const timer = setTimeout(() => setAnimation(""), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      toast({
        title: "Next step",
        description: `Moving to: ${steps[currentStep + 1].title}`,
        duration: 2000,
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
      toast({
        title: "Previous step",
        description: `Moving to: ${steps[currentStep - 1].title}`,
        duration: 2000,
      });
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header with progress */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col py-4">
            <h1 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <span className="mr-2">2.</span>
              Rendering Components
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex flex-wrap gap-3 text-sm font-mono">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={cn(
                      "px-3 py-1.5 rounded-full transition-all duration-300",
                      currentStep === index
                        ? "bg-black text-white shadow-md transform scale-105"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    2.{index + 1} {step.title}
                  </button>
                ))}
              </div>
            </div>
            <Progress value={steps[currentStep].progress} className="h-1.5 mt-4" />
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-4 py-12">
        <div className={cn("max-w-4xl mx-auto", animation)}>
          <Card className="p-8 border border-gray-200 shadow-sm">
            <StepContent step={currentStep} />
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="font-mono transform transition-transform hover:translate-x-[-4px]"
            >
              <ChevronLeft size={16} className="mr-2" />
              Back
            </Button>
            <Button
              variant={currentStep === steps.length - 1 ? "outline" : "default"}
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="font-mono transform transition-transform hover:translate-x-[4px]"
            >
              Next
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvSetupGuide;
