
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CodeExampleProps {
  code: string;
  language?: string;
}

const CodeExample = ({ code, language = "jsx" }: CodeExampleProps) => {
  const { toast } = useToast();
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
      duration: 2000,
    });
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
          <div className="text-xs font-medium text-gray-500">{language}</div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-2 text-gray-500 hover:text-gray-900"
            onClick={handleCopy}
          >
            <Copy size={16} className="mr-1" />
            {showCopied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeExample;
