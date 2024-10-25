'use strict';

//* ****************************************************
//* BANKIST APP
//* ****************************************************

// Account data
const account1 = {
    owner: 'Suraj Adhikari',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jonas Schmedtmann',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Bimala Timsina',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

// Array of accounts
const accounts = [account1, account2, account3, account4];

// DOM Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//* ****************************************************

// Function to display the movements (transactions) in a bank account
const displayMovements = function (movements) {
    
    // Clear any existing HTML inside the container to avoid duplication
    containerMovements.innerHTML = '';

    // Loop through each movement (transaction) in the array
    movements.forEach((mov, index) => {
        // Determine if the movement is a deposit or a withdrawal
        const movementsType = mov > 0 ? 'deposit' : 'withdrawal';

        // Create a string of HTML to represent a movement row with type and value
        const movementsHTML = `
            <div class="movements__row">
                <!-- Display movement type (deposit or withdrawal) along with its index -->
                <div class="movements__type movements__type--${movementsType}">${index + 1}. ${movementsType}</div>
                
                <!-- Display the value of the movement in euros -->
                <div class="movements__value">¥${mov}</div>
            </div>
        `;

        // Insert the newly created HTML for this movement at the beginning of the container
        containerMovements.insertAdjacentHTML('afterbegin', movementsHTML);
    });
};


//* ****************************************************

// Function to calculate and display the total balance of all accounts
const displayTotalBalance = function (account) {
    // Use the reduce method to sum up all movements (deposits and withdrawals)
    const balance = account.movements.reduce( (acc, mov) => acc + mov, 0 );

    // Set the calculated balance in the account object
    account.balance = balance;

    // Update the UI to display the calculated balance in the label with the currency symbol (€)
    labelBalance.textContent = `¥${balance}`;
};


//* ****************************************************