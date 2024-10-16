let wheel = document.querySelector('.wheel');
let spinButton = document.querySelector('.spinButton');
let display = document.querySelector('.display');
let segmentForm = document.getElementById('segmentForm');
let inputValues = document.getElementById('inputValues');
const textContainer = document.getElementById('colorChange');


//random value for wheel spins
let val = Math.ceil(Math.random() * (3600 - 0) + 0) + 720;

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
    let userInput = [
        Number(document.getElementById('inputValue1').value),
        Number(document.getElementById('inputValue2').value),
        Number(document.getElementById('inputValue3').value),
        Number(document.getElementById('inputValue4').value),
        Number(document.getElementById('inputValue5').value),
        Number(document.getElementById('inputValue6').value),
        Number(document.getElementById('inputValue7').value),
        Number(document.getElementById('inputValue8').value)
    ].filter(value => !isNaN(value));


    
    // Clear the wheel before generating new segments
    wheel.innerHTML = '';
    
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

// Spin wheel function
function spinWheel() {
    if (!segments.length) {
        alert("Please enter values for the wheel first!");
        return;
    }

    // Spin the wheel
    wheel.style.transform = "rotate(" + val + "deg)";
    
    /*
    //new now: ___________________________
    let toBeDeg = val + currentDeg; //calculate where degree will be
    console.log("tobeDeg: " + toBeDeg);
    console.log("currentDeg: " + currentDeg);
    let calcDeg = toBeDeg/360; 
    console.log("calcDeg: " + calcDeg);
    let subVal = (Math.floor(calcDeg))*360; //how many full spins the val gave
    console.log("subVal: " + subVal);
    let sub = toBeDeg - subVal; //calc actual current degree after full spins
    console.log("sub: " + sub);
    currentDeg += sub; //update current degree with the new values 
    console.log("updated currentDeg: " + currentDeg);

    //SPIN WHEEL
    wheel.style.transform = "rotate(" + toBeDeg + "deg)";


    if(currentDeg > 360){
        currentDeg -= 360; 
        console.log("updated currentDeg: " + currentDeg);
    }

    let winningVal; 


    if( (currentDeg >= 0 && currentDeg < 23) || (currentDeg >= 338 && currentDeg <= 360)){ //section 1
        winningVal = segments[0].value; 
        console.log(currentDeg);
        console.log("cell 1"); 
    } else if(currentDeg >= 23 && currentDeg < 68){ //section 2
        winningVal = segments[1].value; 
        console.log(currentDeg);
    } else if(currentDeg >= 68 && currentDeg < 113){ //section 3
        winningVal = segments[2].value; 
        console.log(currentDeg);
    }else if(currentDeg >= 113 && currentDeg < 158){ //section 4
        winningVal = segments[3].value;
        console.log(currentDeg); 
    }else if(currentDeg >= 158 && currentDeg < 203){ //section 5
        winningVal = segments[4].value; 
        console.log(currentDeg);
    }else if(currentDeg >= 203 && currentDeg < 248){ //section 6
        winningVal = segments[5].value; 
        console.log(currentDeg);
    }else if(currentDeg >= 248 && currentDeg < 293){ //section 7
        winningVal = segments[6].value; 
        console.log(currentDeg);
    }else if(currentDeg >= 293 && currentDeg < 338){ //section 8
        winningVal = segments[7].value; 
        console.log(currentDeg);
    }

   
    display.innerHTML = "You landed on: " + winningVal;

    */

    // Increment the spin value for the next spin
    val = Math.ceil(Math.random() * 3600);
}

// Spin button click event
spinButton.onclick = spinWheel;


//CHANGE TEXT TO RANDOM COLORS ---------------------------------------------------

const text = textContainer.innerText;
textContainer.innerHTML = '';

// Split the text into individual letters and wrap each in a span
for (let letter of text) {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.innerText = letter;
    textContainer.appendChild(span);
}

let colorNum = 0; 

// Function to randomly assign colors to each letter
function changeLetterColors() {
    const letters = document.querySelectorAll('.letter'); 

    colorNum++; //reset color number each time the interval refreshes
    letters.forEach(letter => {
        letter.style.color = colors[colorNum];
        colorNum++;

        if(colorNum > 8){
            colorNum = 0;
        }
    });
}

// Change the letter colors every 2 seconds
setInterval(changeLetterColors, 300);

// Call the function once to apply the initial colors
changeLetterColors();



