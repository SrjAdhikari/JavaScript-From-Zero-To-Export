//* ****************************************************
//* Array Filter Method In JavaScript
//* ****************************************************


//* filter() Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.  It doesn’t modify the original array and returns a subset of the elements.


//* Syntax: array.filter(function(currentValue, index, array) {......});

// function: A function to test each element. It should return true to keep the element or false to remove it.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array that filter() was called upon.


//* ****************************************************

//* Example: Using filter() with normal functions
const moneyArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = moneyArray.filter(function(money) {
    return (money > 0);
});

console.log(deposits);       // Output -> [ 200, 450, 3000, 70, 1300 ]
console.log(moneyArray);     // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

const withdraw = moneyArray.filter(function(money) {
    return money < 0;
});

console.log(withdraw);       // Output -> [ -400, -650, -130 ]
console.log(moneyArray);     // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

//* Example: Using filter() with arrow functions
const moneyArr = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositMoney = moneyArr.filter( money => money > 0);

console.log(depositMoney);  // Output -> [ 200, 450, 3000, 70, 1300 ]
console.log(moneyArr);      // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

const withdrawMoney = moneyArr.filter( money => money < 0);

console.log(withdrawMoney);     // Output -> [ -400, -650, -130 ]
console.log(moneyArr);          // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

const library = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const historyBooks = library.filter( function(book) {
    return book.genre === "History" && book.publish >= 1995;
});

console.log(historyBooks);

//* Output:
// [ { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 } ]

//* ****************************************************