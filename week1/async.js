const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("Hello Rupesh"); // success
		reject("fuck hogaya");
	}, 1000);
});

p.then((msg) => {
	console.log(msg);
})
	.catch((err) => {
		console.log("Error:", err);
	})
	.finally(() => {
		//will always run
		console.log("Promise finished");
	});
