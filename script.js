// Handle floating hearts on click for night stroll scene
document.addEventListener('DOMContentLoaded', function() {
  const nightScene = document.querySelector('.night-scene');
  
  if (nightScene) {
    nightScene.addEventListener('click', function(e) {
      // Get the click position
      const rect = nightScene.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create a floating heart
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = '💕';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      
      nightScene.appendChild(heart);
      
      // Remove the heart after animation completes
      setTimeout(function() {
        heart.remove();
      }, 3000);
    });
  }
});
