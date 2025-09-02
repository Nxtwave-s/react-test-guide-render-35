
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VariantTable = () => {
  const [activeTab, setActiveTab] = useState("table");
  
  const variants = [
    { 
      type: "getAllBy", 
      found: { status: true, text: "Array" }, 
      notFound: { status: false, text: "Error" }, 
      multiple: { status: true, text: "Array" },
      usage: "Use when you expect one or more elements to exist"
    },
    { 
      type: "queryBy", 
      found: { status: true, text: "Element" }, 
      notFound: { status: true, text: "null" }, 
      multiple: { status: false, text: "Error" },
      usage: "Use to verify something is not present"
    },
    { 
      type: "findBy", 
      found: { status: true, text: "Promise" }, 
      notFound: { status: false, text: "Rejects" }, 
      multiple: { status: false, text: "Rejects" },
      usage: "Use for async elements (setTimeout, API calls)"
    },
    { 
      type: "queryAllBy", 
      found: { status: true, text: "Array" }, 
      notFound: { status: true, text: "Empty array" }, 
      multiple: { status: true, text: "Array" },
      usage: "Use to verify no matching elements exist"
    },
    { 
      type: "findAllBy", 
      found: { status: true, text: "Promise" }, 
      notFound: { status: false, text: "Rejects" }, 
      multiple: { status: true, text: "Promise" },
      usage: "Use for multiple async elements"
    }
  ];

  const StatusIcon = ({ success }: { success: boolean }) => {
    return (
      <span className={cn(
        "inline-block mr-2 font-mono",
        success ? "text-green-600" : "text-red-600"
      )}>
        {success ? "✓" : "✗"}
      </span>
    );
  };

  return (
    <Tabs defaultValue="table" onValueChange={setActiveTab} className="w-full">
      <TabsList className="mb-6 grid grid-cols-2 w-full sm:w-[400px]">
        <TabsTrigger value="table" className="text-sm">Table View</TabsTrigger>
        <TabsTrigger value="visual" className="text-sm">Visual Guide</TabsTrigger>
      </TabsList>
      
      <TabsContent value="table" className="w-full">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-mono font-bold">Query Type</TableHead>
                <TableHead className="font-mono font-bold">When Element Found</TableHead>
                <TableHead className="font-mono font-bold">When Not Found</TableHead>
                <TableHead className="font-mono font-bold">Multiple Matches</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {variants.map((variant) => (
                <TableRow key={variant.type} className="hover:bg-gray-50">
                  <TableCell className="font-mono font-medium">{variant.type}</TableCell>
                  <TableCell>
                    <StatusIcon success={variant.found.status} />
                    <span className="font-mono text-sm">{variant.found.text}</span>
                  </TableCell>
                  <TableCell>
                    <StatusIcon success={variant.notFound.status} />
                    <span className="font-mono text-sm">{variant.notFound.text}</span>
                  </TableCell>
                  <TableCell>
                    <StatusIcon success={variant.multiple.status} />
                    <span className="font-mono text-sm">{variant.multiple.text}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      
      <TabsContent value="visual" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {variants.map((variant) => (
            <div 
              key={variant.type} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="font-mono text-lg font-bold mb-2">{variant.type}</div>
              <div className="text-sm mb-4">{variant.usage}</div>
              <div className="space-y-2 text-sm">
                <div className={cn("p-2 rounded-md", variant.found.status ? "bg-green-50" : "bg-red-50")}>
                  <span className="font-bold">Found:</span> {variant.found.text}
                </div>
                <div className={cn("p-2 rounded-md", variant.notFound.status ? "bg-green-50" : "bg-red-50")}>
                  <span className="font-bold">Not found:</span> {variant.notFound.text}
                </div>
                <div className={cn("p-2 rounded-md", variant.multiple.status ? "bg-green-50" : "bg-red-50")}>
                  <span className="font-bold">Multiple:</span> {variant.multiple.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default VariantTable;
