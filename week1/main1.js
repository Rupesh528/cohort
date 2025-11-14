const arr = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Jane",
		age: 25,
	},
	{
		name: "Bob",
		age: 35,
	},
];

for (let i = 0; i < arr.length; i++) {
	if (arr[i]["age"] == 30) {
		console.log(arr[i].name);
	}
	if (arr[i].age == 30) {
		console.log(arr[i].name);
	}
}

function operator(a, b, operaton) {
	if (operaton == "add") {
		return a + b;
	}
	if (operaton == "sub") {
		return a - b;
	}
}

console.log(operator(2, 3, "add"));
console.log(operator(2, 3, "sub"));

// setInterval(() => {
// 	//make a timer for 20 sec
// 	console.log("hello world");
// 	setTimeout(() => {
// 		//make a timer for 20 sec
// 		console.log("hello world");
// 	}, 1000);
// 	console.log();
// }, 1000);

// setTimeout(() => {});

// important string methods
// slice
// substr
// replaceString
// split

//parseTnt  : convert string to number
//toString  : convert number to string
//parseFloat :  convert string to float

//shift and unshit example code
const arr2 = [1, 2, 3];
arr2.unshift(0); //add an element
console.log(arr2);
arr2.shift(); //remove an element
console.log(arr2);

//forEach example code
const arr3 = [1, 2, 3];
arr3.forEach((element) => {
	console.log(element);
});

//getDate example code
const date = new Date();
console.log(date.getDate(), "this is day");
console.log(date.getDay(), "this is day");
console.log(date.getMonth(), "this is  month");
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds(), "this is milliseconds");

//setTime example code
const date2 = new Date(); // taken from 1970
date2.setTime(2000); //set time in milliseconds
console.log(date2);

//getTime example code
const date3 = new Date();
date3.setTime(2000);
console.log(date3);
console.log(date3.getTime()); //get time in milliseconds

//JSON example code
const obj = {
	name: "John",
	age: 30,
};
const json = JSON.stringify(obj); //convert object to string
console.log(json);
console.log(typeof json);

//parse example code
const json2 = '{"name": "John", "age": 30}';
const obj2 = JSON.parse(json2); //convert string to object
console.log(obj2);
console.log(obj2["age"]);









//how to declare constructor in class
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getDetails(){
		return `my name is ${this.name} and age is ${this.age}`;
	}
}

const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
person1.getDetails();
