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

// Function to display the total deposits, withdrawals, and calculated interest from movements
const displayDepositWithdrawalInterest = function (account) {
    
    // Calculate the total deposits by filtering out positive movements (deposits)
    const deposits = account.movements
        .filter(mov => mov > 0)                 // Keep only positive values (deposits)
        .reduce((acc, mov) => acc + mov, 0);    // Sum up all deposits using reduce
    
    // Calculate the total withdrawals by filtering out negative movements (withdrawals)
    const withdrawals = account.movements
        .filter(mov => mov < 0)                 // Keep only negative values (withdrawals)
        .reduce((acc, mov) => acc + mov, 0);    // Sum up all withdrawals using reduce
    
    // Calculate the interest earned from deposits
    const interest = account.movements
        .filter(mov => mov > 0)                                     // Filter out only deposits (positive movements)
        .map(deposit => (deposit * account.interestRate) / 100)     // Apply the interest rate to each deposit
        .reduce((acc, interest) => acc + interest, 0);              // Sum up all the interest values using reduce

    // Update the UI element to show total deposits with ¥ symbol
    labelSumIn.innerText = `¥${deposits}`;

    // Update the UI element to show total withdrawals (absolute value, no negative sign)
    labelSumOut.innerText = `¥${Math.abs(withdrawals)}`;

    // Update the UI element to show total interest earned with ¥ symbol
    labelSumInterest.innerText = `¥${interest.toFixed(2)}`;
};


//* ****************************************************

// Function to create usernames for each account based on the owner's name in the accounts array
const createUsernames = function(accounts) {
    // Iterate through each account in the accounts array
    accounts.forEach(account => {
        // Create a username by taking the first letter of each part of the owner's name
        account.username = account.owner
            .toLowerCase()          // Convert the owner's full name to lowercase
            .split(' ')             // Split the full name into an array of words (first name, last name)
            .map(name => name[0])   // Map over each name and extract the first letter of each word
            .join('');              // Join the first letters together to form the username

        // Log the created username to the console
        // console.log(`Username created for ${account.owner}: ${account.username}`);
    });
};
createUsernames(accounts);


//* ****************************************************

const updateUI = function (account) {
    // Display the movements (transactions) of the current account
    displayMovements(account.movements);

    // Display the total balance of the current account
    displayTotalBalance(account);

    // Display the total deposits, withdrawals, and calculated interest for the current account
    displayDepositWithdrawalInterest(account);
};


//* ****************************************************

let currentAccount;

// Event listener for "Login" button
btnLogin.addEventListener("click", (e) => {
    // Prevent form from submitting
    e.preventDefault();

    // Find the account with the matching username
    currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value);

    // Check if the account exists and the pin matches
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display welcome message with the account owner's name
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;

        // Display UI elements
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";

        // Blur the input fields
        inputLoginPin.blur();

        // Update the UI elements
        updateUI(currentAccount);
    }
    // If login fails, you could reset the input fields or display an error message
    else {
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";

        // Display an error message
        labelWelcome.textContent = "Wrong Credentials!";
        labelWelcome.style.fontSize = "3rem";
        labelWelcome.style.color = "red";
    }
});


//* ****************************************************