
// get all the elements required
var full_adder1 = document.getElementById("full_adder1")
var full_adder2 = document.getElementById("full_adder2")
var full_adder3 = document.getElementById("full_adder3")
var full_adder4 = document.getElementById("full_adder4")
var full_adder5 = document.getElementById("full_adder5")
var full_adder6 = document.getElementById("full_adder6")
var full_adder7 = document.getElementById("full_adder7")
var full_adder8 = document.getElementById("full_adder8")
var full_adder_img = document.getElementById("full_adder_img")

// add event listeners to the rows of the table
full_adder1.addEventListener("click", activate_full_adder1)
full_adder2.addEventListener("click", activate_full_adder2)
full_adder3.addEventListener("click", activate_full_adder3)
full_adder4.addEventListener("click", activate_full_adder4)
full_adder5.addEventListener("click", activate_full_adder5)
full_adder6.addEventListener("click", activate_full_adder6)
full_adder7.addEventListener("click", activate_full_adder7)
full_adder8.addEventListener("click", activate_full_adder8)

// define a function to display the first full adder image
function activate_full_adder1() {

    // set the first row in the table as active
    full_adder1.classList.add("active")

    // remove the active class from all other rows
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the first full adder image
    full_adder_img.src = "images/full_adder/1.png"

}

// define a function to display the second full adder image
function activate_full_adder2() {

    // set the second row in the table as active
    full_adder2.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the second full adder image
    full_adder_img.src = "images/full_adder/2.png"

}

// define a function to display the third full adder image
function activate_full_adder3() {

    // set the third row in the table as active
    full_adder3.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the third full adder image
    full_adder_img.src = "images/full_adder/3.png"

}

// define a function to display the fourth full adder image
function activate_full_adder4() {

    // set the fourth row in the table as active
    full_adder4.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the fourth full adder image
    full_adder_img.src = "images/full_adder/4.png"

}

// define a function to display the fifth full adder image
function activate_full_adder5() {

    // set the fifth row in the table as active
    full_adder5.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the fifth full adder image
    full_adder_img.src = "images/full_adder/5.png"

}

// define a function to display the sixth full adder image
function activate_full_adder6() {

    // set the sixth row in the table as active
    full_adder6.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder7.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the sixth full adder image
    full_adder_img.src = "images/full_adder/6.png"

}

// define a function to display the seventh full adder image
function activate_full_adder7() {

    // set the seventh row in the table as active
    full_adder7.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder8.classList.remove("active")

    // set the image source to the seventh full adder image
    full_adder_img.src = "images/full_adder/7.png"

}

// define a function to display the eighth full adder image
function activate_full_adder8() {

    // set the eighth row in the table as active
    full_adder8.classList.add("active")

    // remove the active class from all other rows
    full_adder1.classList.remove("active")
    full_adder2.classList.remove("active")
    full_adder3.classList.remove("active")
    full_adder4.classList.remove("active")
    full_adder5.classList.remove("active")
    full_adder6.classList.remove("active")
    full_adder7.classList.remove("active")

    // set the image source to the eighth full adder image
    full_adder_img.src = "images/full_adder/8.png"

}
