let count = 0;

const intervalId = setInterval(() => {
	console.log("Interval running");

	count += 1;
	if (count === 5) {
		clearInterval(intervalId);
	}
}, 1000);
