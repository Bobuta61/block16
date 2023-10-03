// function addTwoNums(num1, num2) {
//     if(typeof num1 === "number" && typeof num2 === "number"){
// console.log(num1 + num2);
// return num1 + num2;
//     }

//     return "Sorry, please use actual numbers as the argumeent";
// }

// const mySum = addTwoNums(60, 100);

// console.log(mySum);

// const someName = "William";

// console.log(someName);

// const sayHelloToSomeone = name => {
// console.log('Hello, ${name)')



// }

// create variables that state budget, gift price one and gift price 2


const budget = 50;
const price1 = 20;
const price2 = 25;

// create function that returns the sum of the two prices

function sumOfGifts(gift1, gift2) {

    return gift1 + gift2;
}

// create a return function with a new variable named giftTotal

const giftTotal = sumOfGifts(price1, price2)

// Create a function of the cost of the gift total plus 8 percent tax

function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}

// Create the addTax function with the giftTotal variable.  Create return
// in a new variable labeled giftsWithTax

const giftsWithTax = addTax(giftTotal);

//Create a function that compares giftsWithTax AND the budget variable.  Create a return
// of true if the budget is greater than or equal to giftsWithTax

function holidayShopping(budget, giftsWithTax) {

    return budget >= giftsWithTax;

}

//holiday shopping function showing the total of the budget and giftsWithTax.

console.log(holidayShopping(budget, giftsWithTax));