// Data for cars
const carData = {
    car1: {
        name: "Ford Model T",
        year: 1927,
        description: "The Ford Model T was the first mass-produced car and became a symbol of the automotive revolution. It was affordable and widely popular.",
        image: "1921_Ford_Model_T.jpg"
    },
    car2: {
        name: "Chevrolet Classic",
        year: 1940,
        description: "The Chevrolet Classic is a standout example of American automotive design in the pre-war era, known for its sturdy build and elegance.",
        image: "629780fc73fbeb31e4099b868c2ca6331bc4dc53.webp"
    },
    car3: {
        name: "Buick Roadmaster",
        year: 1950,
        description: "The Buick Roadmaster was a luxury car with smooth styling and powerful engines, and is now considered a classic icon of 1950s America.",
        image: "c8a89f42350c47ea2e16550beea190d56a1c4a96.webp"
    }
};

// Function to show car information in a modal
function showInfo(carId) {
    const car = carData[carId];
    const carInfoDiv = document.getElementById("car-info");

    carInfoDiv.innerHTML = `
        <h2>${car.name} (${car.year})</h2>
        <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 8px;">
        <p>${car.description}</p>
    `;

    document.getElementById("info-modal").style.display = "flex";
}

// Close modal when the user clicks the "X"
function closeModal() {
    document.getElementById("info-modal").style.display = "none";
}
