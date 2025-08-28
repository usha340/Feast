document.querySelectorAll('.floating-food').forEach(food => {
    food.addEventListener('mouseenter', () => {
        // Get random new positions for the icon to move to within the viewport
        const newX = Math.random() * (window.innerWidth - 100);  // Subtracting to keep it within bounds
        const newY = Math.random() * (window.innerHeight - 100);
        
        // Move the icon to the new position
        food.style.left = `${newX}px`;
        food.style.top = `${newY}px`;
    });
});
