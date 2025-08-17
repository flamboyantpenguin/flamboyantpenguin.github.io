// Function to fetch the quote
function fetchQuote() {
  fetch('https://cdn.dawn.org.in/tea/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(quote => {
      const quoteElement = document.getElementById('kettle');
      quoteElement.textContent = quote;
    })
    .catch(error => {
      console.error('Brewing Tea failed', error);
      document.getElementById('quote-display').textContent = 'You See What You Think You See';
    });
}

// Call the function when the page loads
fetchQuote();