
// get selection elements
var not_selection = document.getElementById("not_selection")
var or_selection = document.getElementById("or_selection")
var and_selection = document.getElementById("and_selection")
var xor_selection = document.getElementById("xor_selection")

// add event listeners
not_selection.addEventListener("click", select_not)
or_selection.addEventListener("click", select_or)
and_selection.addEventListener("click", select_and)
xor_selection.addEventListener("click", select_xor)


// define a function for if the user clicks on the not gate selection
function select_not() {

    // add the active class to the not selection
    not_selection.classList.add("active")

    // remove the active class from all the other selections
    or_selection.classList.remove("active")
    and_selection.classList.remove("active")
    xor_selection.classList.remove("active")

}

// define a function for if the user clicks on the or gate selection
function select_or() {

    // add the active class to the or selection
    or_selection.classList.add("active")

    // remove the active class from all the other selections
    not_selection.classList.remove("active")
    and_selection.classList.remove("active")
    xor_selection.classList.remove("active")

}

// define a function for if the user clicks on the and gate selection
function select_and() {

    // add the active class to the and selection
    and_selection.classList.add("active")

    // remove the active class from all the other selections
    not_selection.classList.remove("active")
    or_selection.classList.remove("active")
    xor_selection.classList.remove("active")

}

// define a function for if the user clicks on the xor gate selection
function select_xor() {

    // add the active class to the xor selection
    xor_selection.classList.add("active")

    // remove the active class from all the other selections
    not_selection.classList.remove("active")
    or_selection.classList.remove("active")
    and_selection.classList.remove("active")

}


// get elements required
var not1 = document.getElementById("not1")
var not2 = document.getElementById("not2")
var not_img = document.getElementById("not_img")

// add event listeners
not1.addEventListener("click", activate_not1)
not2.addEventListener("click", activate_not2)

// define a function for when the user click the first row in the not table
function activate_not1() {

    // add the active class to the first row
    not1.classList.add("active")

    // remove the active class from the second row
    not2.classList.remove("active")

    // change the image source to the first image
    not_img.src = "images/not_gate/1.png"

}

// define a function for when the user click the second row in the not table
function activate_not2() {

    // add the active class to the second row
    not2.classList.add("active")

    // remove the active class from the first row
    not1.classList.remove("active")

    // change the image source to the second image
    not_img.src = "images/not_gate/2.png"

}


// get elements required
var or1 = document.getElementById("or1")
var or2 = document.getElementById("or2")
var or3 = document.getElementById("or3")
var or4 = document.getElementById("or4")
var or_img = document.getElementById("or_img")

// add event listeners
or1.addEventListener("click", activate_or1)
or2.addEventListener("click", activate_or2)
or3.addEventListener("click", activate_or3)
or4.addEventListener("click", activate_or4)

// define a function for when the user click the first row in the or table
function activate_or1() {

    // add the active class to the first row
    or1.classList.add("active")

    // remove the active class from the other rows
    or2.classList.remove("active")
    or3.classList.remove("active")
    or4.classList.remove("active")

    // change the image source to the first image
    or_img.src = "images/or_gate/1.png"

}

// define a function for when the user click the second row in the or table
function activate_or2() {

    // add the active class to the second row
    or2.classList.add("active")

    // remove the active class from the other rows
    or1.classList.remove("active")
    or3.classList.remove("active")
    or4.classList.remove("active")

    // change the image source to the second image
    or_img.src = "images/or_gate/2.png"

}

// define a function for when the user click the third row in the or table
function activate_or3() {

    // add the active class to the third row
    or3.classList.add("active")

    // remove the active class from the other rows
    or1.classList.remove("active")
    or2.classList.remove("active")
    or4.classList.remove("active")

    // change the image source to the third image
    or_img.src = "images/or_gate/3.png"

}

// define a function for when the user click the fourth row in the or table
function activate_or4() {

    // add the active class to the fourth row
    or4.classList.add("active")

    // remove the active class from the other rows
    or1.classList.remove("active")
    or2.classList.remove("active")
    or3.classList.remove("active")

    // change the image source to the fourth image
    or_img.src = "images/or_gate/4.png"

}


// get required elements
var and1 = document.getElementById("and1")
var and2 = document.getElementById("and2")
var and3 = document.getElementById("and3")
var and4 = document.getElementById("and4")
var and_img = document.getElementById("and_img")

// add event listener
and1.addEventListener("click", activate_and1)
and2.addEventListener("click", activate_and2)
and3.addEventListener("click", activate_and3)
and4.addEventListener("click", activate_and4)

// define a function for when the user click the first row in the and table
function activate_and1() {

    // add the active class to the first row
    and1.classList.add("active")

    // remove the active class from the other rows
    and2.classList.remove("active")
    and3.classList.remove("active")
    and4.classList.remove("active")

    // change the image source to the first image
    and_img.src = "images/and_gate/1.png"

}

// define a function for when the user click the second row in the and table
function activate_and2() {

    // add the active class to the second row
    and2.classList.add("active")

    // remove the active class from the other rows
    and1.classList.remove("active")
    and3.classList.remove("active")
    and4.classList.remove("active")

    // change the image source to the second image
    and_img.src = "images/and_gate/2.png"

}

// define a function for when the user click the third row in the and table
function activate_and3() {

    // add the active class to the third row
    and3.classList.add("active")

    // remove the active class from the other rows
    and1.classList.remove("active")
    and2.classList.remove("active")
    and4.classList.remove("active")

    // change the image source to the third image
    and_img.src = "images/and_gate/3.png"

}

// define a function for when the user click the fourth row in the and table
function activate_and4() {

    // add the active class to the fourth row
    and4.classList.add("active")

    // remove the active class from the other rows
    and1.classList.remove("active")
    and2.classList.remove("active")
    and3.classList.remove("active")

    // change the image source to the fourth image
    and_img.src = "images/and_gate/4.png"

}


// get required elements
var xor1 = document.getElementById("xor1")
var xor2 = document.getElementById("xor2")
var xor3 = document.getElementById("xor3")
var xor4 = document.getElementById("xor4")
var xor_img = document.getElementById("xor_img")

// add event listeners
xor1.addEventListener("click", activate_xor1)
xor2.addEventListener("click", activate_xor2)
xor3.addEventListener("click", activate_xor3)
xor4.addEventListener("click", activate_xor4)

// define a function for when the user click the first row in the xor table
function activate_xor1() {

    // add the active class to the first row
    xor1.classList.add("active")

    // remove the active class from the other rows
    xor2.classList.remove("active")
    xor3.classList.remove("active")
    xor4.classList.remove("active")

    // change the image source to the first image
    xor_img.src = "images/xor_gate/1.png"

}

// define a function for when the user click the second row in the xor table
function activate_xor2() {

    // add the active class to the second row
    xor2.classList.add("active")

    // remove the active class from the other rows
    xor1.classList.remove("active")
    xor3.classList.remove("active")
    xor4.classList.remove("active")

    // change the image source to the second image
    xor_img.src = "images/xor_gate/2.png"

}

// define a function for when the user click the third row in the xor table
function activate_xor3() {

    // add the active class to the third row
    xor3.classList.add("active")

    // remove the active class from the other rows
    xor1.classList.remove("active")
    xor2.classList.remove("active")
    xor4.classList.remove("active")

    // change the image source to the third image
    xor_img.src = "images/xor_gate/3.png"

}

// define a function for when the user click the fourth row in the xor table
function activate_xor4() {

    // add the active class to the fourth row
    xor4.classList.add("active")

    // remove the active class from the other rows
    xor1.classList.remove("active")
    xor2.classList.remove("active")
    xor3.classList.remove("active")

    // change the image source to the fourth image
    xor_img.src = "images/xor_gate/4.png"

}
