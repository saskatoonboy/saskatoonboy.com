
// get all the elements required
var half_adder1 = document.getElementById("half_adder1")
var half_adder2 = document.getElementById("half_adder2")
var half_adder3 = document.getElementById("half_adder3")
var half_adder4 = document.getElementById("half_adder4")
var half_adder_img = document.getElementById("half_adder_img")

// add event listeners to the rows of the table
half_adder1.addEventListener("click", activate_half_adder1)
half_adder2.addEventListener("click", activate_half_adder2)
half_adder3.addEventListener("click", activate_half_adder3)
half_adder4.addEventListener("click", activate_half_adder4)

// define a function to display the first half adder image
function activate_half_adder1() {

    // set the first row in the table as active
    half_adder1.classList.add("active")

    // remove the active class from all other rows
    half_adder2.classList.remove("active")
    half_adder3.classList.remove("active")
    half_adder4.classList.remove("active")

    // set the image source to the first half adder image
    half_adder_img.src = "images/half_adder/1.png"

}

// define a function to display the second half adder image
function activate_half_adder2() {

    // set the second row in the table as active
    half_adder2.classList.add("active")

    // remove the active class from all other rows
    half_adder1.classList.remove("active")
    half_adder3.classList.remove("active")
    half_adder4.classList.remove("active")

    // set the image source to the second half adder image
    half_adder_img.src = "images/half_adder/2.png"

}

// define a function to display the third half adder image
function activate_half_adder3() {

    // set the third row in the table as active
    half_adder3.classList.add("active")

    // remove the active class from all other rows
    half_adder1.classList.remove("active")
    half_adder2.classList.remove("active")
    half_adder4.classList.remove("active")

    // set the image source to the third half adder image
    half_adder_img.src = "images/half_adder/3.png"

}

// define a function to display the fourth half adder image
function activate_half_adder4() {

    // set the fourth row in the table as active
    half_adder4.classList.add("active")

    // remove the active class from all other rows
    half_adder1.classList.remove("active")
    half_adder2.classList.remove("active")
    half_adder3.classList.remove("active")

    // set the image source to the fourth half adder image
    half_adder_img.src = "images/half_adder/4.png"

}
