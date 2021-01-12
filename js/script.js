// Question 1

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("in stock");
}


// Question 2

for (var i = 15; i < 26; i++) {
    if(i === 17 || i === 20) {
        console.log(i);
    }
}


// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var liGames = document.querySelector(".games");

for (var i = 0; i < games.length; i++){
    if(games[i].rating < 3.5 && games[i].rating !== null) {
        liGames.innerHTML = liGames.innerHTML + "<li>" + games[i].title + ":" + " " + games[i].rating + "</li>";
    }
}


// Question 4

function whatIDontLike(thingsIDontLike){
    if(typeof thingsIDontLike != "string") {
        console.log("Please send in a string")
    }
    else {
        console.log("I don't like " + thingsIDontLike);
    }
}

whatIDontLike(true);


// Question 5
//Create a function that accepts two arguments.
//Inside the function, try to convert the arguments to numbers.
//If either of the arguments cannot be converted to a number, return the value: 
//"Invalid argument(s)".
//If both arguments are number values or can be converted to number values, 
//subtract the second argument from the first and return the result from the function.
//Call the function, pass in to two values and assign the return value to be the innerHTML 
//value of the element with the id subtraction.//

function doubleFunction(number1, number2) {
    var number1 = parseFloat(number1)
    var number2 = parseFloat(number2)
    var result = number1 - number2
    if(typeof number1 == "number" || typeof number2 == "number") {
        console.log(result);
    }
    else {
        console.log("Invalid argument(s)");
    }
    var publishResult = document.querySelector("#subtraction");
    publishResult.innerHTML = publishResult.innerHTML + "<p>" + result + "</p>";
}

doubleFunction(10, "hello");

// hjelp med NaN melding


// Question 6

var pageButton = document.querySelector(".page");
var title = document.querySelector("title");
var body = document.querySelector("body")
var heading1 = document.querySelector("h1")
var list = document.querySelector("ul")

pageButton.onclick = function () {
    title.innerHTML = "Updated title";
    body.style.background = "yellow";
    heading1.style.background = "green";
    heading1.style.fontFamily = "impact";
    heading1.innerHTML = "<a href index.html>" + heading1.innerHTML + "</>";
    list.style.listStyleType = "none";
    list.style.padding = "0";
}


// Question 7
//Select the button with the class price.
//When the button is clicked, loop through the array below, add all the prices and
// assign the total to be the innerHTML value of the element with the id total.
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];