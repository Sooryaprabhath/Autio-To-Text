import { useState } from "react";
import translateText from "../utils/translationService";

function useSpeechTranslation(sourceLang, targetLang) {
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleSpeech = async (text) => {
    setOriginalText(text);
    const translation = await translateText(text, sourceLang, targetLang);
    setTranslatedText(translation);
  };

  return {
    originalText,
    translatedText,
    handleSpeech,
  };
}

export default useSpeechTranslation;
