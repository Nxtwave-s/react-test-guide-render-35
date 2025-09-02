
import React from "react";

interface CheckListProps {
  items: string[];
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <ul className="space-y-3 mt-6 mb-8 max-w-2xl">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 mr-3 font-mono">✓</span>
          <span className="text-gray-800">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
