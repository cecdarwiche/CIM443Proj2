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

//new now 
let currentDeg = 0; 

function calcWinner(val){

}

// Spin wheel function
function spinWheel() {
    if (!segments.length) {
        alert("Please enter values for the wheel first!");
        return;
    }

    // Spin the wheel
    wheel.style.transform = "rotate(" + val + "deg)";
    
    //new now: ___________________________
    let toBeDeg = val + currentDeg; //calculate where degree will be
    let calcDeg = toBeDeg/360; 
    let subVal = (Math.floor(calcDeg))*360; //how many full spins the val gave
    let sub = toBeDeg - subVal; //calc actual current degree after full spins
    currentDeg += sub; //update current degree with the new values 

    let winningVal; 

    //alert(val);
    //alert(currentDeg);

    if(338 <= currentDeg < 23){ //section 1
        winningVal = segments[0].value; 
    } else if(23 <= currentDeg < 68){ //section 2
        winningVal = segments[1].value; 
    } else if(68 <= currentDeg < 113){ //section 3
        winningVal = segments[2].value; 
    }else if(113 <= currentDeg < 158){ //section 4
        winningVal = segments[3].value; 
    }else if(158 <= currentDeg < 203){ //section 5
        winningVal = segments[4].value; 
    }else if(203 <= currentDeg < 248){ //section 6
        winningVal = segments[5].value; 
    }else if(248 <= currentDeg < 293){ //section 7
        winningVal = segments[6].value; 
    }else if(293 <= currentDeg < 338){ //section 8
        winningVal = segments[7].value; 
    }

   
    display.innerHTML = "You landed on: " + winningVal;

    //__________________________________

    /*
    // Calculate the angle and determine the winning segment
    const actualDeg = val % 360;
    const winningIndex = Math.floor(actualDeg / zoneSize);
    
    // Get the winning value from user input
    const winningValue = segments[winningIndex].value;

    // Display the result
    display.innerHTML = "You landed on: " + winningValue;
    */

    // Increment the spin value for the next spin
    val = Math.ceil(Math.random() * 3600);
}

// Spin button click event
spinButton.onclick = spinWheel;

