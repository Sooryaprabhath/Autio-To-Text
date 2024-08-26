import React, { useEffect, useState } from "react";
import analyzeSentiment from "../utils/sentimentAnalysis";

function SentimentFeedback({ text }) {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const result = analyzeSentiment(text);
    setFeedback(result);
  }, [text]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Sentiment Feedback:
      </h3>
      <p
        className={`mt-2 p-4 rounded-md shadow-sm ${
          feedback.includes("Negative")
            ? "bg-red-50 border-red-300 text-red-700"
            : "bg-blue-50 border-blue-300 text-blue-700"
        }`}
      >
        {feedback || "Analyzing sentiment..."}
      </p>
    </div>
  );
}

export default SentimentFeedback;
