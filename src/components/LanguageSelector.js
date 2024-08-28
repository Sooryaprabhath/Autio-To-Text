import React from "react";

function LanguageSelector({ label, selectedLang, onChange }) {
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}:
      </label>
      <select
        className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={selectedLang}
        onChange={(e) => onChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
