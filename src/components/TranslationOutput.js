import React from "react";

function TranslationOutput({ text }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Translated Text:</h3>
      <p className="mt-2 p-4 bg-green-50 border border-green-300 rounded-md shadow-sm text-gray-700">
        {text || "Translation will appear here"}
      </p>
    </div>
  );
}

export default TranslationOutput;
