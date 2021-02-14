var hoursValue = document.getElementById("hoursEntered");
var hoursAnswer = document.getElementById("hoursConverted");
var hoursError = document.getElementById("hoursError");

function hoursToSeconds() {
  var convertHours = hoursValue.value * 3600;
  if (hoursValue.value == "") {
    hoursError.innerHTML = "** Enter Hours";
    hoursAnswer.innerHTML = "";
    return false;
  } else {
    hoursAnswer.innerHTML =
      hoursValue.value + " Hours = " + convertHours + " Seconds";
    hoursError.innerHTML = "";
    return true;
  }
}

// Age
var ageValue = document.getElementById("ageEntered");
var ageAnswer = document.getElementById("ageConverted");
var ageError = document.getElementById("ageError");

function ageToDays() {
  var convertAge = ageValue.value * 365;
  if (ageValue.value == "") {
    ageError.innerHTML = "** Enter Age";
    ageAnswer.innerHTML = "";
    return false;
  } else {
    ageAnswer.innerHTML = ageValue.value + " Years = " + convertAge + " Days";
    ageError.innerHTML = "";
    return true;
  }
}

// Array
var arrayValue = document.getElementById("arrayEntered").value;
var arrayAnswer = document.getElementById("arrayConverted");
var arrayError = document.getElementById("arrayError");

var newArray = [];

function arraySubmit() {
  if (arrayValue.value == "") {
    arrayError.innerHTML = "** Enter Number";
    arrayAnswer.innerHTML = "";
    return false;
  } 
  else {
    for (let i = 0; i <= arrayValue; i++) {
      convertArray = newArray[i] = prompt("Enter Number : ");
    }
    for (let i = 0; i <= arrayValue; i++) {
      arrayValue * -1;
      arrayAnswer.innerHTML = ("[" + newArray[i] + ",", "]");
    }

    arrayAnswer.innerHTML = arrayValue.value + " Array = " + convertArray + " Array";
    arrayError.innerHTML = "";
    return true;
  }
}

//

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
});

document
  .getElementById("submitAge")
  .addEventListener("click", function (eventAge) {
    eventAge.preventDefault();
  });

document
  .getElementById("submitArray")
  .addEventListener("click", function (eventArray) {
    eventArray.preventDefault();
  });
