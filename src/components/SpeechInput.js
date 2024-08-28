import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechInput({ onSpeech }) {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log("Transcript:", transcript);
    onSpeech(transcript);
  };

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.error("Browser does not support speech recognition.");
    }
  }, []);

  return (
    <div className="mb-6">
      <button
        className={`w-full ${
          listening ? "bg-red-500" : "bg-blue-500"
        } text-white font-bold py-2 px-4 rounded-md shadow hover:bg-blue-600`}
        onMouseDown={startListening}
        onMouseUp={stopListening}
      >
        {listening ? "🎤 Listening... Release to Stop" : "🎤 Start Speaking"}
      </button>
    </div>
  );
}

export default SpeechInput;
