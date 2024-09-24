//* ****************************************************
//* Scope Chain In JavaScript
//* ****************************************************

//* What is Scope Chain ?
//? The scope chain is the process by which JavaScript determines where to look for variables during execution. It searches through multiple levels of nested scopes to find the variable.

//* When a variable is referenced inside a function:
//? 1. JavaScript first checks the current function’s local scope for that variable.
//? 2. If the variable is not found, it moves one level up to the parent scope.
//? 3. This continues until the global scope is reached.
//? 4. If the variable is not found anywhere, JavaScript throws a "ReferenceError".

//* Detailed Example of Scope Chain:
let globalvar = 10; // global scope
function outerFunction() {
	let outerVar = 20; // local scope

	function innerFunction() {
		let innerVar = 30; // local scope

		console.log("Global Variable:", globalvar); // Found in global scope
		console.log("OuterFunction Variable:", outerVar); // Found in outerFunction's local scope
		console.log("InnerFunction Variable:", innerVar); // Found in innerFunction's local scope
	}
	innerFunction();
}
outerFunction();

//* Explanation (How the Scope Chain Works):
//? 1. JavaScript first looks for "innerVar" inside "innerFunction" (the local scope of innerFunction).
//? 2. Then, it looks for "outerVar". Since it is not in "innerFunction", it goes one level up to "outerFunction" and finds it there.
//? 3. Finally, for "globalVar", JavaScript doesn’t find it in "innerFunction" or "outerFunction", so it checks the global scope and finds it.

//* Output:
// Global Variable: 10
// OuterFunction Variable: 20
// InnerFunction Variable: 30

//* Scope Chain Lookup Behavior:
//? 1. JavaScript starts from the innermost scope and moves outward until it finds the variable or reaches the global scope.
//? 2. If two variables in different scopes have the same name, JavaScript will use the nearest one in the chain.
//? 3. If the variable is not found, JavaScript throws a "ReferenceError".
