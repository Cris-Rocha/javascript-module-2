/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelectorAll('p')) // gives you a list of nodes -- if is one element - gives you a list of one node

/* Prints:

0: p.lead
1: p.article-lead
2: p.article-lead
3: p.article-lead
4: p.article-lead
5: p.text-center
length: 6
[[Prototype]]: NodeList

*/

console.log(document.querySelector('div'))

console.log(document.querySelector("#jumbotron-text"));

console.log(document.querySelectorAll('.primary-content p'))

// prints: NodeList(3) [p.lead, p.article-lead, p.article-lead]


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

// const showMessage = () =>  window.alert("Thanks for visiting Bikes for Refugees!") // arrow function >>>> solution 1 

const alertBtn = document.querySelector("#alertBtn")
// alertBtn.addEventListener("click", showMessage) 

 alertBtn.addEventListener("click", () => window.alert("Thanks for visiting Bikes for Refugees!")) // solution 2


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeBackgroundColor = () => document.body.style.backgroundColor = "eee2df"

const backgroundBtn = document.querySelector('#bgrChangeBtn')
backgroundBtn.addEventListener("click", changeBackgroundColor)

//

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const learnMoreBtn = document.querySelector("#addTextBtn") 

const addParagraph = () => {
    const findElement = document.querySelector("#mainArticles") 
    const paragraph = document.createElement('p')
    paragraph.innerText = "test"
    
    findElement.appendChild(paragraph)
}

learnMoreBtn.addEventListener("click", addParagraph)



/*
Task 5
======

ENG -When the 'Larger links!' button is clicked, the text of all links on the page should increase. 
SPAN -Cuando el mensaje '¡Enlaces más grandes!' se hace clic en el botón, el texto de todos los enlaces en la página debería aumentar.
POR -Quando o 'Links maiores!' botão for clicado, o texto de todos os links da página deverá aumentar.
*/

const largerLinksButton = document.querySelector("#largerLinksBtn") // 1

const increaseLinks = () => {
    const allLinks = document.querySelectorAll('a'); //3
    allLinks.forEach(link => {link.style.fontSize = 'x-large'}) //4 
}
largerLinksButton.addEventListener("click", increaseLinks) // 2

// 1 find the larger links button (#largerLinksBtn)
// 2 add the event click on it 
// 3 find all the links on the page ('a')
// 4 increase their size



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

