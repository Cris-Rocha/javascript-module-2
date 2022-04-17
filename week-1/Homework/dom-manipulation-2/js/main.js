// ## Part 1

const changingJumbotron = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
const volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

// buttons:

const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");

// Change color when clicking the button
const changeColorStyleClickBtn = (
  jambotronBgColor,
  donateBgColor,
  volunteerBgColor,
  volunteerTextColor
) => {
  changingJumbotron.style.backgroundColor = jambotronBgColor;
  donateBtn.style.backgroundColor = donateBgColor;
  volunteerBtn.style.backgroundColor = volunteerBgColor;
  volunteerBtn.style.color = volunteerTextColor;
};

blueBtn.addEventListener("click", () =>
  changeColorStyleClickBtn("588fbd", "#ffa500", "black", "white")
);

orangeBtn.addEventListener("click", () =>
  changeColorStyleClickBtn("f0ad4e", "#5751fd", "31b0d5", "white")
);

greenBtn.addEventListener("click", () =>
  changeColorStyleClickBtn(
    "87ca8a",
    "#black",
    "8c9c08",
    greenButtonBehaviorForVolunteerTextColor
  )
);

// if else statement :

const greenButtonBehaviorForVolunteerTextColor = () =>
  volunteerBtn.style.color == "white" ? "white" : "";

// ## Part 2

// second part made by myself:

/*

const submitBtn = document.querySelector("form button");
const emailField = document.querySelector("#exampleInputEmail1");
const yourNameField = document.querySelector("#example-text-input");
const describeField = document.querySelector("#exampleTextarea");

const checkValidFields = (event) => {
  event.preventDefault();
  if (
    emailField.value.length === 0 ||
    emailField.value.trim().includes("@") === false
  ) {
    return (emailField.style.backgroundColor = "red");
  }
  if (yourNameField.value.length === 0) {
    return (yourNameField.style.backgroundColor = "red");
  }
  if (describeField.value.length === 0) {
    return (describeField.style.backgroundColor = "red");
  } else {
    yourNameField.style.backgroundColor = "white";
    describeField.style.backgroundColor = "white";
    window.alert("Thank you for filling out the form");
    emailField.value = "";
    yourNameField.value = "";
    describeField.value = "";
  }
};
submitBtn.addEventListener("click", checkValidFields);

*/

/// exercise refactored with the codebuddy:

const emailField = document.querySelector("#exampleInputEmail1");
const yourNameField = document.querySelector("#example-text-input");
const describeField = document.querySelector("#exampleTextarea");
const frm = document.querySelector("#registerForm");

const checkValidFields = (event) => {
  event.preventDefault();
  const invalidEmail =
    emailField.value.length === 0 ||
    emailField.value.trim().includes("@") === false; // true
  const invalidYourName = yourNameField.value.length === 0;
  const invalidDescribeField = describeField.value.length === 0;

  if (invalidEmail || invalidYourName || invalidDescribeField) {
    invalidEmail
      ? (emailField.style.backgroundColor = "red")
      : (emailField.style.backgroundColor = "");
    invalidYourName
      ? (yourNameField.style.backgroundColor = "red")
      : (yourNameField.style.backgroundColor = "");
    invalidDescribeField
      ? (describeField.style.backgroundColor = "red")
      : (describeField.style.backgroundColor = "");
  } else {
    frm.reset(); // Reset all form data
    emailField.style.backgroundColor = "";
    yourNameField.style.backgroundColor = "";
    describeField.style.backgroundColor = "";
    window.alert("Thank you for filling out the form");
  }
};

frm.addEventListener("submit", checkValidFields);



