import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MethodTable = () => {
  const methods = [
    { name: "getByRole", description: "Find elements by ARIA role (e.g., button, heading)" },
    { name: "getByLabelText", description: "Find form elements by their label text" },
    { name: "getByPlaceholderText", description: "Find inputs by placeholder attribute" },
    { name: "getByText", description: "Find elements by visible text" },
    { name: "getByDisplayValue", description: "Find form elements by their current value" },
    { name: "getByAltText", description: "Find images by their alt attribute" },
    { name: "getByTitle", description: "Find elements by title attribute" },
    { name: "getByTestId", description: "Find elements by data-testid attribute (testing-only)" }
  ];

  return (
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-1/3 font-mono font-bold">Method</TableHead>
              <TableHead className="font-mono font-bold">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {methods.map((method) => (
              <TableRow key={method.name} className="hover:bg-gray-50">
                <TableCell className="font-mono text-black font-medium">{method.name}</TableCell>
                <TableCell>{method.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MethodTable;
