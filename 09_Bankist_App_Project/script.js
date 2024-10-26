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

    movementsDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-12-23T07:42:02.383Z",
        "2024-01-28T09:15:04.904Z",
        "2024-04-01T10:17:24.185Z",
        "2024-05-08T14:11:59.604Z",
        "2024-07-26T17:01:17.194Z",
        "2024-07-28T23:36:17.929Z",
        "2024-08-01T10:51:36.790Z",
    ],
};

const account2 = {
    owner: 'Jonas Schmedtmann',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,

    movementsDates: [
        "2019-01-01T13:15:33.035Z",
        "2020-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2021-02-05T16:33:06.386Z",
        "2021-04-10T14:43:26.374Z",
        "2022-06-25T18:49:59.371Z",
        "2022-07-26T12:01:20.894Z",
    ],
};

const account4 = {
    owner: 'Bimala Timsina',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,

    movementsDates: [
        "2019-10-01T13:15:33.035Z",
        "2020-05-30T09:48:16.867Z",
        "2019-11-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2021-02-05T16:33:06.386Z",
    ],
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
const displayMovements = function (account, sort = false) {
    // If sort is true, sort the movements array in ascending order
    const movementsCopy = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;
    
    // Clear any existing HTML inside the container to avoid duplication
    containerMovements.innerHTML = '';

    // Loop through each movement (transaction) in the array
    movementsCopy.forEach((mov, index) => {
        // Determine if the movement is a deposit or a withdrawal
        const movementsType = mov > 0 ? 'deposit' : 'withdrawal';

        // Determine the date of the movement
        const date = new Date(account.movementsDates[index]);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const displayDate = `${year}/${month}/${day}`;


        // Create a string of HTML to represent a movement row with type and value
        const movementsHTML = `
            <div class="movements__row">
                <!-- Display movement type (deposit or withdrawal) along with its index -->
                <div class="movements__type movements__type--${movementsType}">${index + 1}. ${movementsType}</div>

                <!-- Display the date of the movement in a human-readable format -->
                <div class="movements__date">${displayDate}</div>
                
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
    displayMovements(account);

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

        // Create current date and time and display it in the UI
        const now = new Date();
        const day = `${now.getDate()}`.padStart(2, 0);
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        const hours = `${now.getHours()}`.padStart(2, 0);
        const minutes = `${now.getMinutes()}`.padStart(2, 0);

        labelDate.textContent = `${year}/${month}/${day}, ${hours}:${minutes}`;

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

// Event listener for "Transfer money" button
btnTransfer.addEventListener("click", (e) => {
    // Prevent form from submitting
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiver = inputTransferTo.value;

    // Find the receiver account with the matching username
    const receiverAccount = accounts.find( acc => acc.username === receiver);
    console.log(amount, receiverAccount);

    if (
        amount > 0 && 
        receiverAccount && 
        currentAccount.balance >= amount && 
        receiverAccount?.username !== currentAccount.username
    ) {
        // Transfer the amount to the receiver account
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);

        // Add the transfer date to the receiver account
        receiverAccount.movementsDates.push(new Date().toISOString());
        currentAccount.movementsDates.push(new Date().toISOString());

        // Update the UI elements
        updateUI(currentAccount);
    }

    // Clear input fields
    inputTransferAmount.value = inputTransferTo.value = "";

    // Blur the input fields
    inputTransferAmount.blur();
});


//* ****************************************************

btnLoan.addEventListener("click", (e) => {
    // Prevent form from submitting
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add the loan amount to the current account balance
        currentAccount.movements.push(amount);

        // Add the loan date to the current account
        currentAccount.movementsDates.push(new Date().toISOString());

        // Update the UI elements
        updateUI(currentAccount);
    }

    // Clear input fields
    inputLoanAmount.value = "";

    // Blur the input fields
    inputLoanAmount.blur();
});


//* ****************************************************

// Event listener for "Close account" button
btnClose.addEventListener("click", (e) => {
    // Prevent form from submitting
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username && 
        Number(inputClosePin.value) === currentAccount.pin   
    ) {
        const index = accounts.findIndex( acc => acc.username === currentAccount.username);

        // Delete the current account from the accounts array
        accounts.splice(index, 1);

        // Hide UI elements
        containerApp.style.opacity = 0;
    }

    // Clear input fields
    inputCloseUsername.value = inputClosePin.value = "";

    // Blur the input fields
    inputClosePin.blur();
});

//* ****************************************************

let sorted = false;
btnSort.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();

    displayMovements(currentAccount.movements, !sorted);

    sorted = !sorted;
});

//* ****************************************************