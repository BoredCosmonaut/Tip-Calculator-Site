const tipButton = document.querySelectorAll(".tip-button");
const peopleAmountBox = document.querySelector("#people-input");
const moneyAmountBox = document.querySelector("#money-input"); 
var tipValue = 0;
var moneyAmount;


//Adds an event listener to tip buttons
for(let button of tipButton) {  
    button.addEventListener("click", (e) => {
        let tipValueRaw = e.target.innerHTML;
        console.log(tipValueRaw)
        e.target.style.backgroundColor = "hsl(184, 14%, 56%)"
        for(let button of tipButton) {
            if(button.innerHTML != tipValueRaw) {
                button.style.backgroundColor = "hsl(183, 100%, 15%)";
                button.style.color = "hsl(189, 41%, 97%)"
                console.log("Hello")
            }
        }
        //gets the value of the tip
        if(tipValueRaw.length == 1) {
            tipValue = `${tipValueRaw[0]}`
        }
        else {
            tipValue = `${tipValueRaw[0]}${tipValueRaw[1]}`
        }   
    })
}


peopleAmountBox.addEventListener("input", () => {
    if(moneyAmountBox.value == "" || peopleAmountBox.value == "" || tipValue == "") {
        alert("Please fill all the spaces and select a tip percentage");
    }
    else {
        //Changes the tip buttons background color to the original
        for(let button of tipButton) {
            button.style.backgroundColor = "hsl(183, 100%, 15%)"
        }
        //Makes the calculations 
        moneyAmount = parseFloat(moneyAmountBox.value);
        peopleAmount = parseFloat(peopleAmountBox.value);
        //Gives warning if people amount is 0
        if(peopleAmountBox.value == 0) {
            document.getElementById("warning").style.display = "block";
        }
        else {
            document.getElementById("warning").style.display = "none";
            document.querySelector("#tip-money").innerHTML = `$${((moneyAmount * (parseFloat(tipValue) / 100)) / peopleAmount).toFixed(2)}`;
            document.querySelector("#total-money").innerHTML = `$${((moneyAmount / peopleAmount) +(moneyAmount * (parseFloat(tipValue) / 100)) / peopleAmount).toFixed(2)}`;
        }
    }

})

//Changes the other buttons color to the original
document.querySelector("#custom").addEventListener("click" ,() => {
    for(let button of tipButton) {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
        button.style.color = "hsl(189, 41%, 97%)"
        console.log("Hello")
    }
})
//Gets the value of the custom tip box
document.querySelector("#custom").addEventListener("input" ,() => {
    for(let button of tipButton) {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
        button.style.color = "hsl(189, 41%, 97%)"
        console.log("Hello")
    }
    tipValue = parseInt(document.querySelector("#custom").value);
})

document.querySelector("#reset").addEventListener("click", () => {
    for(let button of tipButton) {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
        button.style.color = "hsl(189, 41%, 97%)"
        console.log("Hello")
    }
    //Resets the custom tip box
    document.querySelector("#custom").value = "";
    //Resets the people input box
    peopleAmountBox.value = "";
    peopleAmountBox.ariaPlaceholder = "Amount";
    //Resets the money input box
    moneyAmountBox.value = "";
    moneyAmountBox.ariaPlaceholder = "Amount";
    //Resets the total values
    document.querySelector("#tip-money").innerHTML = "$0.00";
    document.querySelector("#total-money").innerHTML = "$0.00";
    tipValue = 0;
})