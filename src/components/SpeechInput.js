// import React from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// function SpeechInput({ onSpeechRecognition }) {
//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   const handleStartListening = () => {
//     SpeechRecognition.startListening({ continuous: true, language: "en-US" }); // Adjust language as needed
//   };

//   const handleStopListening = () => {
//     SpeechRecognition.stopListening();
//     onSpeechRecognition(transcript);
//     resetTranscript();
//   };

//   return (
//     <div>
//       <p>Microphone: {listening ? "on" : "off"}</p>
//       <button onClick={handleStartListening} disabled={listening}>
//         Start
//       </button>
//       <button onClick={handleStopListening} disabled={!listening}>
//         Stop
//       </button>
//       <p>{transcript}</p>
//     </div>
//   );
// }

// export default SpeechInput;

import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechInput({ onSpeech }) {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  // Function to start listening
  const startListening = () => {
    resetTranscript();  // Clear any previous transcripts
    SpeechRecognition.startListening({ continuous: true });  // Start continuous listening
  };

  // Function to stop listening and pass the transcript back
  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log('Transcript:', transcript);  // Debug: Check what is captured
    onSpeech(transcript);
  };
  
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.error('Browser does not support speech recognition.');
    }
  }, []);

  return (
    <div className="mb-6">
      <button
        className={`w-full ${listening ? 'bg-red-500' : 'bg-blue-500'} text-white font-bold py-2 px-4 rounded-md shadow hover:bg-blue-600`}
        onMouseDown={startListening}
        onMouseUp={stopListening}
      >
        {listening ? '🎤 Listening... Release to Stop' : '🎤 Start Speaking'}
      </button>
    </div>
  );
}

export default SpeechInput;
