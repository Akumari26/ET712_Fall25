/**
 * *Fnu Alisha Kumari*
 * Lab 5, more abon function, object
 * Sep 11, 2025
 */
console.log("Fnu Alisha Kumari")
// anonymous function in a variable
//EXAMPLE 1
let great = function(username){
    console.log(`Welcome to function ${username}`)
}
// arrow function
let greeting = (username)=>{
    console.log(`Good afternoon ${username}`)
}
//EXAMPLE 2: default parameters
// randomly generate a number between 1 and 9
// function will pass the amount of time that the number will be generated
function rand_number(x){
    for(let n = 1; n <= x; n++){
        return Math.ceil(Math.random()*9)
        console.log(`${num}`)
    } 
}

//EXAMPLE 3: spread syntac ...
numbers = [2, 0, -10, 5, 8, -9]
console.log(`\n------ Example 3: Spread ------`)
console.log(`The maximum number is = ${max_number}`)

//EXAMPLE 4: create an object 'car'
const car ={
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_descriotion : function(){
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }
}

//EXAMPLE 5
// creat an  object 'myMath' that will calculate the perimeter or the area of a rectangle
const myMath - {
    // methods
    perimeter : function(w=0,l=0){ return (2*w)+(2*l) },
    area : function(w=0,l=0){return w*l}
}

// EXAMPLE 6
const cat = {
    // properties,
    name: "Mickey",
    color:"Black with white spots",
    bread: "unknown",

    //method
    meow: ()=>{console.log("MEOW MEOW MEOW")}
}

// Example 7
const hen = {
    // properties
    name : "Helen",
    eggCount : 0,

    // method
    layAnEgg : ()=>{
        this.eggCount++
        return `${this.name} egg count = ${this.eggCount}`
    }
}

// EXAMPLE 8
try{
    function yell(message=""){ 
        console.log(message.toUpperCase().repeat(3))
    }
    catch(error){
        console.log(error)
        console.log('Please pass a string next time!')
   }
}
