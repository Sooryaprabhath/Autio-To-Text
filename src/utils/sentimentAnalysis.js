export default function analyzeSentiment(text) {
    // Mock implementation of sentiment analysis
    // You would integrate with a real sentiment analysis service here
    if (text.includes('bad')) {
      return 'Negative sentiment detected';
    }
    return 'Positive sentiment detected';
  }
  