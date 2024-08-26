import React from "react";

function TextDisplay({ label, text }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{label}:</h3>
      <p className="mt-2 p-4 bg-gray-50 border border-gray-300 rounded-md shadow-sm text-gray-700">
        {text || "No text available"}
      </p>
    </div>
  );
}

export default TextDisplay;
