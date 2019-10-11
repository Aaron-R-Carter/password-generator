// generate random password

function generate() {

    //set password length

    var pwLength = 8;

    //password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_+";

    var password = "";

    //create for loop to choose password characters

    for (var i = 1; i <= pwLength; i++) {
        password = password + values charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }

    // add password to textbox/display area

    document.getElementById("display").value = password;
}

// set default length display 

document.getElementById("length").innerHTML = "Length: 8"


function copyPassword(){
    document.getElementById("display").select(); 
    document.execCommand("Copy");
    alert("Password Copied to Clipboard");
}


