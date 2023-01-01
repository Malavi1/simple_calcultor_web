let num1 = 10
let num2 = 20
let resultEl = document.getElementById("final")
let signEl = document.getElementById("sign")

function add(){
    res = num1+num2
    resultEl.textContent = " Addtion :" + " " + res 
    signEl.textContent ="➕"
}
function sub(){
    res = num1-num2
    resultEl.textContent = " Subtraction :" + " " + res 
    signEl.textContent ="➖"
}
function mul(){
    res = num1*num2
    resultEl.textContent = " Multiplication :" + " " + res 
    signEl.textContent ="✖️"
    
}
function exp(){
    res = num1**num2
    resultEl.textContent = "Exponentiation :" + " " + res 
    signEl.textContent ="✖️✖️"
}
function mod(){
    res = num1%num2
    resultEl.textContent = " Modulus :" + " " + res 
    signEl.textContent ="➗"
}

