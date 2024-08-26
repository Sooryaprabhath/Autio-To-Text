// import React, { useState } from "react";
// import SpeechInput from "./components/SpeechInput";
// import TranslationOutput from "./components/TranslationOutput";
// function App() {
//   const [originalText, setOriginalText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");

//   const handleSpeechRecognition = (recognizedText) => {
//     setOriginalText(recognizedText);
//     // Call translation API here and update translatedText
//   };

//   return (
//     <div className="App">
//       <h1>Real-time Language Translator</h1>
//       <SpeechInput onSpeechRecognition={handleSpeechRecognition} />
//       <TranslationOutput
//         originalText={originalText}
//         translatedText={translatedText}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import SpeechInput from './components/SpeechInput';
import TextDisplay from './components/TextDisplay';
import TranslationOutput from './components/TranslationOutput';
import SentimentFeedback from './components/SentimentFeedback';
import useSpeechTranslation from './hooks/useSpeechTranslation';

function App() {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [originalText, setOriginalText] = useState('');
  const { translatedText, handleSpeech } = useSpeechTranslation(sourceLang, targetLang);

  const handleSpeechInput = (transcript) => {
    console.log('Received transcript:', transcript);  // Debug: Check the received transcript
    setOriginalText(transcript);
    handleSpeech(transcript);
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Real-Time Language Translation & Enhancement</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <LanguageSelector label="From" selectedLang={sourceLang} onChange={setSourceLang} />
        <LanguageSelector label="To" selectedLang={targetLang} onChange={setTargetLang} />
        <SpeechInput onSpeech={handleSpeechInput} />
        <TextDisplay label="Original Text" text={originalText} />
        <TranslationOutput text={translatedText} />
        <SentimentFeedback text={translatedText} />
      </div>
    </div>
  );
}

export default App;

