
// ## Part 1

const blueBtn = document.querySelector('#blueBtn')
const changingJumbotron = document.querySelector(".jumbotron")
const donateBtn = document.querySelector(".btn.btn-primary.btn-lrg")
const volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg")

// - When clicking **blue** it should change:

const clickBlueBtn = () => {
    changingJumbotron.style.backgroundColor = "588fbd";
    donateBtn.style.backgroundColor = "#ffa500"
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white"
}

blueBtn.addEventListener('click', clickBlueBtn)

// - - When clicking **orange** it should change:

const orangeBtn = document.querySelector('#orangeBtn')

const clickOrangeBtn = () => {
    changingJumbotron.style.backgroundColor = "f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd"
    volunteerBtn.style.backgroundColor = "31b0d5";
    volunteerBtn.style.color = "white"
}

orangeBtn.addEventListener('click', clickOrangeBtn)

// - When clicking **green** it should change:

const greenBtn = document.querySelector('#greenBtn')

const clickGreenBtn = () => {
    changingJumbotron.style.backgroundColor = "87ca8a";
    donateBtn.style.backgroundColor = "#black"
    volunteerBtn.style.backgroundColor = "8c9c08";
  
}

greenBtn.addEventListener('click', clickGreenBtn)


// ## Part 2

const submitBtn = document.querySelector('form button')
const emailField = document.querySelector("#exampleInputEmail1")
const yourNameField = document.querySelector('#example-text-input')
const describeField = document.querySelector('#exampleTextarea')


const checkValidFields = (event) => {
    event.preventDefault()
    if (emailField.value.length === 0 || emailField.value.trim().includes("@") === false){
        return emailField.style.backgroundColor = "red" };
    if (yourNameField.value.length === 0 ) {
        return yourNameField.style.backgroundColor = "red";}
    if (describeField.value.length === 0) {
        return describeField.style.backgroundColor = "red" }
    else { 
        yourNameField.style.backgroundColor = "white";
        describeField.style.backgroundColor = "white";
        window.alert('Thank you for filling out the form');
        emailField.value = "";
        yourNameField.value = "";
        describeField.value = "";
    }
    
} 
submitBtn.addEventListener('click', checkValidFields)