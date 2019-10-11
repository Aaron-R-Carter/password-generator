// generate random password

var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_+";
var password = "";
var generateBtn = document.querySelector("#generate-btn");
var clipboardBtn = document.querySelector("#clipboard-btn");
var clearBtn = document.querySelector("#clear-btn");

// on button generate click

generateBtn.addEventListener("click", function () {

    //set password length

    var pwLength = document.getElementById("length-selector").value;


    //password values

    if (pwLength > 7 && pwLength < 129) {

        //choose password characters

        for (var i = 1; i <= pwLength; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
        }

        // add password to textbox/display area

        document.getElementById("display").value = password;

    }

    else {
        alert("Your password must be between 8 and 128 characters, please try again");
    }


});


// on clipboard button click

clipboardBtn.addEventListener("click", function() {

    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password Copied to Clipboard");

});

// on clear button click

clearBtn.addEventListener("click", function(){

    document.getElementById("my-form").reset();

})




