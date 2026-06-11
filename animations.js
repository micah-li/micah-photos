const cards = document.querySelectorAll('.photo-card');

// Set proper stacking order initially (first card on top)
cards.forEach((card, index) => {
  card.style.zIndex = cards.length - index;
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Add animation class to fly the photo out
    card.classList.add('sifted');
    
    // After animation ends, place it at the bottom of the stack
    setTimeout(() => {
      card.classList.remove('sifted');
      
      // Update z-indexes to cycle the photo to the back
      cards.forEach(c => {
        let currentZ = parseInt(c.style.zIndex);
        if (currentZ === cards.length) {
          c.style.zIndex = 1; // Top card goes to bottom
        } else {
          c.style.zIndex = currentZ + 1; // All other cards move up
        }
      });
    }, 500); // Matches CSS transition time
  });
});

//random number generator for the degree on the photo
