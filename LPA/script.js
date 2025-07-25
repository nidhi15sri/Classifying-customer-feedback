const form = document.getElementById('feedbackForm');
const feedbackOutput = document.getElementById('feedbackText');
const categoryOutput = document.getElementById('categoryText');
const outputBox = document.getElementById('output');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const feedback = document.getElementById('feedback').value.toLowerCase();
  const category = classifyFeedback(feedback);

  feedbackOutput.innerText = feedback;
  categoryOutput.innerText = category;
  outputBox.style.display = 'block';

  form.reset();
});

function classifyFeedback(text) {
  const positiveWords = ['good', 'great', 'excellent', 'love', 'awesome', 'happy'];
  const negativeWords = ['bad', 'poor', 'worst', 'hate', 'terrible', 'disappointed'];
  const complaintWords = ['refund', 'issue', 'problem', 'not working', 'angry', 'broken'];
  const suggestionWords = ['should', 'suggest', 'recommend', 'can you', 'please add'];

  if (positiveWords.some(word => text.includes(word))) return 'Positive';
  if (negativeWords.some(word => text.includes(word))) return 'Negative';
  if (complaintWords.some(word => text.includes(word))) return 'Complaint';
  if (suggestionWords.some(word => text.includes(word))) return 'Suggestion';

  return 'Neutral';
}
