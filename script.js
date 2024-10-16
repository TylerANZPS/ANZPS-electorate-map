document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('#map-container path'); // Adjust based on your SVG structure
    paths.forEach(item => {
        item.addEventListener('click', () => {
            const color = prompt('Enter a color (name or hex):');
            if (color) {
                item.style.fill = color; // Change fill color
            }
        });
    });
});
