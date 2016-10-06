// Custom function
function calculateTip() {
    // Store the data of imputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQulity = document.getElementById("serviceQulity").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    // Quick validation
    
    if(billAmount === "" || serviceQulity == 0) { 
        window.alert("Please enter some values to ger this baby up and running!");        
        return; // this will prevent the function from continuing
    }
    
    // Chceck to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <=1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // Do some math!
    var total = (billAmount * serviceQulity) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    //Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom fucntion
document.getElementById("calculate").onclick = function() { calculateTip(); }