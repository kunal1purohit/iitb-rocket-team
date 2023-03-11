// Select the text element
const text = document.querySelector('#text');

// Create an observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Check if the element is visible
    if (entry.intersectionRatio > 0) {
      // Add the 'fade-in' class to the element
      text.classList.add('fade-in');

      // Stop observing the element
      observer.unobserve(text);
    }
  });
});

// Start observing the text element
observer.observe(text);
