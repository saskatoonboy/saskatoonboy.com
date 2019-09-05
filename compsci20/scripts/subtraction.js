
document.getElementById("btn2").addEventListener("click", convert_signed_magnitude) // add a click event to the button

// define a function to convert decimal to signed magnitude binary
function convert_signed_magnitude() {
    var text_box = document.getElementById("text2") // get the text box element
    var output =  document.getElementById("signed_magnitude_converter_output") // get the header element used to display the converted data

    var num = Number(text_box.value) // get the value of the text box
    var binary_num = "0" // declaire a variable for the binary output with the signed bit
    var digit = 1 // declaire a variable to track the binary digit being calculated

    // if the number is negative then make it negaive and make the signed bit 1
    if (num < 0) {
        num = num * -1
        binary_num = "1"
    }

    while (digit * 2 <= num) { // repeat until the we find the last digit in the number will be
        digit = digit * 2 // move to the next digit
    }

    while (digit != 0) { // repeat until the entire binary number is found
        var bit = (num >= digit) // get a true or false value representing the bit
        if (bit) { // if the bit is a 1 (true)
            num = num - digit // subract the value of this digit from the number
            binary_num = binary_num.concat("1") // concatinate a 1 onto the binary number
        } else { // if the bit is 0 (flase)
            if (binary_num.length > 0) {  // don't start the number with a 0
                binary_num = binary_num.concat("0") // concatinate a 0 onto the binary number
            }
        }
        digit = Math.floor(digit / 2) // make the digit smaller and floor it incase you just divided 1
    }

    output.innerHTML = binary_num // display the binary value

}



document.getElementById("btn3").addEventListener("click", convert_ones_complement) // add a click event to the button

// define a function to convert decimal to ones complement binary
function convert_ones_complement() {
    var text_box = document.getElementById("text3") // get the text box element
    var output =  document.getElementById("ones_complement_converter_output") // get the header element used to display the converted data

    var num = Number(text_box.value) // get the value of the text box
    var binary_num = "0" // declaire a variable for the binary output
    var digit = 1 // declaire a variable to track the binary digit being calculated
    var negative = false // declarie a variable to track if the number is negative

    // if the number is negative then make it negaive and make the signed bit 1 and set the negative variable to true
    if (num < 0) {
        num = num * -1
        binary_num = "1"
        negative = true
    }

    while (digit * 2 <= num) { // repeat until the we find the last digit in the number will be
        digit = digit * 2 // move to the next digit
    }

    while (digit != 0) { // repeat until the entire binary number is found
        var bit = (num >= digit) // get a true or false value representing the bit
        if (bit) { // if the bit is a 1 (true)
            num = num - digit // subract the value of this digit from the number
            if (negative) { // if it is negative conatinate a 0 if it is positive concatinate a 1
                binary_num = binary_num.concat("0")
            } else {
                binary_num = binary_num.concat("1")
            }
        } else { // if the bit is 0 (flase)
            if (binary_num.length > 0) {  // don't start the number with a 0
                if (negative) { // if it is negative conatinate a 1 if it is positive concatinate a 0
                    binary_num = binary_num.concat("1")
                } else {
                    binary_num = binary_num.concat("0")
                }
            }
        }
        digit = Math.floor(digit / 2) // make the digit smaller and floor it incase you just divided 1
    }

    output.innerHTML = binary_num // display the binary value

}



document.getElementById("btn4").addEventListener("click", convert_twos_complement) // add a click event to the button

// define a function to convert decimal to twos complement binary
function convert_twos_complement() {
    var text_box = document.getElementById("text4") // get the text box element
    var output =  document.getElementById("twos_complement_converter_output") // get the header element used to display the converted data

    var num = Number(text_box.value) // get the value of the text box
    var binary_num = "0" // declaire a variable for the binary output
    var digit = 1 // declaire a variable to track the binary digit being calculated
    var negative = false // declarie a variable to track if the number is negative

    // if the number is negative then make it negaive and make the signed bit 1 and set the negative variable to true
    if (num < 0) {
        num = num * -1
        binary_num = "1"
        negative = true
    }

    while (digit * 2 <= num) { // repeat until the we find the last digit in the number will be
        digit = digit * 2 // move to the next digit
    }

    while (digit != 0) { // repeat until the entire binary number is found
        var bit = (num >= digit) // get a true or false value representing the bit
        if (bit) { // if the bit is a 1 (true)
            num = num - digit // subract the value of this digit from the number
            if (negative) { // if it is negative conatinate a 0 if it is positive concatinate a 1
                binary_num = binary_num.concat("0")
            } else {
                binary_num = binary_num.concat("1")
            }
        } else { // if the bit is 0 (false)
            if (binary_num.length > 0) {  // don't start the number with a 0
                if (negative) { // if it is negative conatinate a 1 if it is positive concatinate a 0
                    binary_num = binary_num.concat("1")
                } else {
                    binary_num = binary_num.concat("0")
                }
            }
        }
        digit = Math.floor(digit / 2) // make the digit smaller and floor it incase you just divided 1
    }

    if (negative) { // if the number is negative then add one

        var final_num = "" // declare an empty variable for the final result
        var adding = true // delcare a variable to track if we are still adding (carry bits)

        // loop through every digit one at a time starting with the right most digit
        for (index=binary_num.length-1; index >= 0; index = index - 1) {

            var digit = binary_num[index] // get the digit from the binary number

            if (digit == "0") { // if the digit is 0

                if (adding) { // if we are still adding

                    final_num = "1".concat(final_num) // concatinate a one
                    adding = false // and set adding to false since 1+0 does not create a carry

                } else { // if we are not adding one

                    final_num = "0".concat(final_num) // concatinate a zero

                }

            } else { // if the digit is a 1

                if (adding) { // if we are adding one

                    final_num = "0".concat(final_num) // concatinate a zero and leave adding as true since 1+1 creates a carry

                } else { // if we are not adding one

                    final_num = "1".concat(final_num) // concatinate a one

                }

            }
        }

        binary_num = final_num // set binary_num as final_num

    }

    output.innerHTML = binary_num // display the binary value

}
