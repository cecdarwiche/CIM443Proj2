let wheel = document.querySelector('.wheel');
let spinButton = document.querySelector('.spinButton');
let display = document.querySelector('.display');
let segmentForm = document.getElementById('segmentForm');
let inputValues = document.getElementById('inputValues');
let zoneSize;  // Will calculate later based on user input

let val = Math.ceil(Math.random() * 3600);

const colors = [
    'pink',
    'turquoise',
    'yellow',
    'orange',
    'green',
    'darkblue',
    'purple',
    'coral'
]

// Event listener for form submission
segmentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form refresh

    // Get the input values from the user
    let userInput = inputValues.value.split(',').map(Number);
    
    // Clear the wheel before generating new segments
    wheel.innerHTML = '';
    
    // Calculate zone size (each segment will occupy an equal portion)
    zoneSize = 360 / userInput.length;

    // Dynamically generate wheel segments based on user input
    userInput.forEach((value, index) => {
        let segmentDiv = document.createElement('div');
        segmentDiv.classList.add('num');
        segmentDiv.style.setProperty('--i', index + 1);
        segmentDiv.style.setProperty('--clr', colors[index]);  // Assign random color to each segment
        
        let span = document.createElement('span');
        span.textContent = value;
        
        segmentDiv.appendChild(span);
        wheel.appendChild(segmentDiv);
    });

    // Create a new segments array based on user input
    segments = userInput.map((value, index) => ({
        value: value,
        color: colors[index],
    }));

    // Now the wheel has been generated dynamically based on user input
});

// Spin wheel function
function spinWheel() {
    if (!segments.length) {
        alert("Please enter values for the wheel first!");
        return;
    }

    // Spin the wheel
    wheel.style.transform = "rotate(" + val + "deg)";
    
    // Calculate the angle and determine the winning segment
    const actualDeg = val % 360;
    const winningIndex = Math.floor(actualDeg / zoneSize);
    
    // Get the winning value from user input
    const winningValue = segments[winningIndex].value;

    // Display the result
    display.innerHTML = "You landed on: " + winningValue;
    
    // Increment the spin value for the next spin
    val += Math.ceil(Math.random() * 3600);
}

// Spin button click event
spinButton.onclick = spinWheel;

