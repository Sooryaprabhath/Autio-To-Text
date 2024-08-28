import React, { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import SpeechInput from "./components/SpeechInput";
import TextDisplay from "./components/TextDisplay";
import TranslationOutput from "./components/TranslationOutput";
import SentimentFeedback from "./components/SentimentFeedback";
import useSpeechTranslation from "./hooks/useSpeechTranslation";

function App() {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [originalText, setOriginalText] = useState("");
  const { translatedText, handleSpeech } = useSpeechTranslation(
    sourceLang,
    targetLang
  );

  const handleSpeechInput = (transcript) => {
    console.log("Received transcript:", transcript);
    setOriginalText(transcript);
    handleSpeech(transcript);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Real-Time Language Translation & Enhancement
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* <LanguageSelector
          label="From"
          selectedLang={sourceLang}
          onChange={setSourceLang}
        />
        <LanguageSelector
          label="To"
          selectedLang={targetLang}
          onChange={setTargetLang}
        /> */}
        <SpeechInput onSpeech={handleSpeechInput} />
        <TextDisplay label="Text from Audio" text={originalText} />
        {/* <TranslationOutput text={translatedText} /> */}
        {/* <SentimentFeedback text={translatedText} /> */}
      </div>
    </div>
  );
}

export default App;
