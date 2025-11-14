const date1 = new Date(); // taken from 1970
// date2.setTime(2000); //set time in milliseconds

const var1 = date1.getTime();
// console.log(date1);

for (let i = 0; i < 100; i++) {
	console.log(i);
}

const date2 = new Date(); //
const var2 = date2.getTime();
// console.log(date2);

console.log(var2 - var1);

const user = { name: "Rupesh", age: 24 };

const f2 = Object.keys(user);
console.log(f2);

const f3 = Object.values(user);
console.log(f3);

const f1 = Object.entries(user);
console.log(f1); //make objects to arrays

const arr2 = [
	["a", 10],
	["b", 20],
];
const f4 = Object.fromEntries(arr2); //make arrays to objects
console.log(f4);

//setTimeout runs only after a specified timout
// setTimeout(() => console.log("One-time"), 1000);

//this runs again and again
// setInterval(() => console.log("Repeating"), 1000);

const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("Hello Rupesh"); // success
		reject("fuck hogaya");
	}, 2000);
});

// p.then((msg) => {
// 	console.log(msg);
// });
p.catch((err) => {
	console.log("Error:", err);
});
p.finally(() => {
	console.log("Promise finished");
});

//async : used in real world, aync,await and fetch
// async function getUser() {
// 	const res = await fetch("/api/user");
// 	const data = await res.json();
// 	return data;
// }
