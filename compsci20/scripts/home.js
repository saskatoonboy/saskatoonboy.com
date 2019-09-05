
document.getElementById("btn1").addEventListener("click", convert_number) // add a click event to the button

function convert_number() {
    var text_box = document.getElementById("text1") // get the text box element
    var output =  document.getElementById("converter_output") // get the header element used to display the converted data

    var num = Number(text_box.value) // get the value of the text box
    var binary_num = "" // declaire a variable for the binary output
    var digit = 1 // declaire a variable to track the binary digit being calculated

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

    if (binary_num == "") { // if the final value should be 0 then make it be
        binary_num = "0"
    }

    output.innerHTML = binary_num // display the binary value

}
