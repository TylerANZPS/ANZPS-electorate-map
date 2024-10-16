document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.querySelector('#map-container img');

    mapImage.addEventListener('click', function(event) {
        const color = prompt("Enter a color (name or hex code):");
        if (color) {
            mapImage.style.filter = `hue-rotate(${getHueRotation(color)}deg)`;
        }
    });

    function getHueRotation(color) {
        // Function to convert color name or hex to hue rotation
        // This is a placeholder; you can implement this logic
        return 0; // Modify this according to your needs
    }
});
