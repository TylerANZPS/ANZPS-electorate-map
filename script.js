document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('click', function() {
        // Prompt user for a color
        const newColor = prompt("Enter a color (name or hex code):", "#ff0000");
        
        // Change the background color of the area if a color was provided
        if (newColor) {
            this.style.backgroundColor = newColor;
        }
    });
});
