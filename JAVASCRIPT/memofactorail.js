const factorial = (() => {
	const memo = new Map([[0, 1], [1, 1]]);

	return function calculateFactorial(n) {
		if (!Number.isInteger(n) || n < 0) {
			throw new RangeError("Input must be a non-negative integer");
		}

		if (memo.has(n)) return memo.get(n);

		const result = n * calculateFactorial(n - 1);
		memo.set(n, result);
		return result;
	};
})();

console.log(factorial(3)); 
