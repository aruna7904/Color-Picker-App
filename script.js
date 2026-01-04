const colorInput = document.getElementById('colorInput');
const colorDisplay = document.getElementById('colorDisplay');
const randomBtn = document.getElementById('randomBtn');
const palette = document.getElementById('palette');

// Function to update display
function updateColor(color) {
  colorDisplay.textContent = color;
  colorDisplay.style.backgroundColor = color;
}

// Generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add color to palette
function addToPalette(color) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  colorBox.style.backgroundColor = color;
  colorBox.title = color;

  colorBox.addEventListener('click', () => {
    updateColor(color);
  });

  palette.appendChild(colorBox);
}

// Event listeners
colorInput.addEventListener('input', (e) => {
  updateColor(e.target.value);
  addToPalette(e.target.value);
});

randomBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  updateColor(randomColor);
  addToPalette(randomColor);
});

// Initialize with white
updateColor('#ffffff');
