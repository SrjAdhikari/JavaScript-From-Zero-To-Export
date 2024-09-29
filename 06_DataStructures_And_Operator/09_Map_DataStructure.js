//* ****************************************************
//* Map Data Structure In JavaScript
//* ****************************************************


//* What is Map Data Structure ?
// A Map is a collection of key-value pairs where both the keys and values can be of any type. It is more flexible than an object because keys in a Map can be of any data type, including objects, functions, or primitive types (strings, numbers, etc.).


//* ****************************************************

//* 1. Creation of Map:
//? Syntax: const map = new Map();
// This creates an empty Map object.


//* We can also initialize a Map with key-value pairs by passing an array of arrays
//* Example 1:
const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
]);

console.log(map);  // Output -> Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }


//* Example 2:
const myMap = new Map([
    ["name", "Suraj"],
    ["age", 27],
    [1, "One"],
    [true, "True"],
])

console.log(myMap);  // Output -> Map(4) { 'name' => 'Suraj', 'age' => 27, 1 => 'One', true => 'True' }


//* ****************************************************

//* 2. Adding values to a Map:
//? Syntax: map.set(key, value);

// The .set() method adds a key-value pair to the Map.


//* Example:
const car = new Map();

car.set("maker", "Mercedes-Benz");
car.set("model", "G-class");
car.set("year", 2024);
car.set("color", "Black");

console.log(car);       
// Output -> Map(4) { 'maker' => 'Mercedes-Benz', 'model' => 'G-class', 'year' => 2024, 'color' => 'Black' }


//* ****************************************************

//* 3. Retrieving values from a Map:
//? Syntax: map.get(key);

// The .get() method returns the value associated with the given key.


//* Example:
const myCar = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
]);

const maker = myCar.get("maker");
console.log(maker);  // Output -> Mercedes-Benz;

const model = myCar.get("model");
console.log(model);  // Output -> G-class


//* ****************************************************

//* 4. Checking if a key exists in a Map:
//? Syntax: map.has(key);

// The .has() method returns a boolean value indicating whether the given key exists in the Map.
// It returns true if the key is present, otherwise false.


//* Example:
const favCar = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
]);

const hasMaker = favCar.has("maker");
console.log(hasMaker);  // Output -> true

const hasEngine = favCar.has("Engine");
console.log(hasEngine);  // Output -> false


//* ****************************************************

//* 5. Deleting Elements from a Map:
//? Syntax: map.delete(key);

// The .delete() method removes the key-value pair with the given key from the Map.


//* Example:
const dreamCar = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5],
]);

dreamCar.delete("doors");
console.log(dreamCar);  
// Output -> Map(5) { 'maker' => 'Mercedes-Benz', 'model' => 'G-class', 'year' => 2024, 'color' => 'Black', 'engine' => 'V8' }

dreamCar.delete("engine");
console.log(dreamCar);
// Output -> Map(4) { 'maker' => 'Mercedes-Benz', 'model' => 'G-class', 'year' => 2024, 'color' => 'Black' }


//* ****************************************************

//* 6. Checking the size of a Map:
//? Syntax: map.size;

// The .size property tells you how many entries (key-value pairs) are in the Map.


//* Example:
const fav_car = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5],
]);

const size = fav_car.size;
console.log(`Size of Map: ${size}`);   // Output -> Size of Map: 6


//* ****************************************************

//* 7. Clearing a Map:
//? Syntax: map.clear();

// The .clear() method removes all entries from the Map, leaving it empty.


//* Example:
const my_Car = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5],
]);

my_Car.clear();
console.log(my_Car);    // Output -> Map(0) {}


//* ****************************************************

//* 8. Iterating over a Map:
//? Using for...of loop

// The for...of loop iterates through the Map and destructures the key-value pairs into key and value.


//* Example:
const dream_Car = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5],
]);

for(const [key, value] of dream_Car) {
    console.log(`${key}: ${value}`);
}

// Output:
// maker: Mercedes-Benz
// model: G-class
// year: 2024
// color: Black
// engine: V8
// doors: 5


//* ****************************************************

//* 9. Converting Map to Array:
//? Using spread operator

const days = new Map([
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
]);

const mapArray = [...days];
console.log(mapArray);     // Output -> [ [ 1, 'Monday' ], [ 2, 'Tuesday' ], [ 3, 'Wednesday' ] ]


//? Using Array.from() method

const days2 = new Map([
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
]);

const mapArray2 = Array.from(days2);
console.log(mapArray2);    // Output -> [ [ 1, 'Monday' ], [ 2, 'Tuesday' ], [ 3, 'Wednesday' ] ]

//* ****************************************************