/*
Fnu Alisha Kumari
Homework 2 - functions, loops, and conditional statement
*/

// -------------------------
// EXERCISE 1: name_counting()
// -------------------------
function name_counting(names){
let count = 0
for(let i = 0; i &lt; names.length; i++){
if(names[i].length &lt; 5){
count++
}
}
return count
}

let names = ["Ann","Peter","Patricia","Sam","Katerina"]
console.log("\n------ Exercise 1 ------")
console.log(`Names array = ${names}`)
console.log(`Number of names less than 5 characters = ${name_counting(names)}`)


// -------------------------
// EXERCISE 2: checkNum()
// -------------------------
function checkNum(){
let num
while(true){
num = prompt("Enter a number:") // ask user for input
if(num !== null &amp;&amp; num.trim() !== "" &amp;&amp; !isNaN(num)){
num = Number(num)
break
}
else{
alert("Invalid input. Please enter a valid number.")
}
}
if(num % 2 === 0){
return true
}
else{
return false
}
}

console.log("\n------ Exercise 2 ------")
console.log(`Result of checkNum() = ${checkNum()}`)
