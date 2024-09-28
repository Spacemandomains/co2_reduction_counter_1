// script.js
document.addEventListener('DOMContentLoaded', function() {
    const ppmValueElement = document.getElementById('ppm-value');
    const co2RemovedDisplayElement = document.getElementById('co2-removed-display');
    const quantityInputElement = document.getElementById('quantity');

    // Updated value for CO₂ reduction per shirt
    const co2ReductionPerShirt = 0.000000000256; // Example value in ppm
    const initialPPM = 420; // Set initial CO₂ ppm to 420

    function updateCO2Reduction() {
        const quantity = parseInt(quantityInputElement.value, 10) || 0;
        const totalReduction = quantity * co2ReductionPerShirt;
        const updatedPPM = initialPPM - totalReduction;
        co2RemovedDisplayElement.textContent = totalReduction.toFixed(9); // Updated decimal places
        ppmValueElement.textContent = updatedPPM.toFixed(9); // Updated decimal places
    }

    quantityInputElement.addEventListener('input', updateCO2Reduction);

    // Initialize the display with the starting values
    updateCO2Reduction();
});
