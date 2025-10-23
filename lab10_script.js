console.log("student's full name")
//collect the elements
let myform = document.querySelector(".myform")
let greeting = document.querySelector(".greeting")
let displayusernmae = document.querySelector(".display_username")

// collect data within the form after the submit button is pressed
myform.addEventListener("submit", function(event){
    // prevent the default form behavior
    event.preventDefault()

    //collect the data
    let usernameInput = document.querySelector("#username")
    let usernamevalue = usernameInput.value 

    if(usernamevalue.trim() ===""){
        alert("Please a username")
        return;
    } 

    //after the validation passes, the data is sent to server
    //in html, after the validation, the greeting message will display with the usernmae
    greeting.style.display = "block"
    displayusernmae.textContent = usernamevalue

    // clear the username text field
    usernameInput.value = ""

    // submit the form after validation
    myform.submit()
})

let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernamevalue = usernameInput.value
    usernamevaluelength = usernamevalue.length
    if(20>=usernamevaluelength >=2){
        displayusernmae.style.display = "none"
    }
    else{
        displayusernmae.style.display = "block"
    }
})
 
