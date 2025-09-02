
import React from "react";

const QueryTable = () => {
  const queries = [
    { method: "getByRole", finds: "Elements by ARIA role (e.g., button, heading)" },
    { method: "getByLabelText", finds: "Form elements tied to labels" },
    { method: "getByPlaceholderText", finds: "Inputs via placeholder" },
    { method: "getByText", finds: "Elements by visible text" },
    { method: "getByDisplayValue", finds: "Elements by their value (e.g., input value)" },
    { method: "getByAltText", finds: "Images using alt text" },
    { method: "getByTitle", finds: "Elements with title attributes" },
    { method: "getByTestId", finds: "Testing-only queries using data-testid" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-mono">
              Method
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-mono">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {queries.map((query) => (
            <tr key={query.method} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">
                {query.method}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {query.finds}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryTable;
