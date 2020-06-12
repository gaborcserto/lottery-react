export default class NumberGenerator {
	constructor(type, highest) {
		this.type = type;
		this.highest = highest;
	}

	generate() {
		let numbers = [];

		for (let i = 0; i < this.type; i++) {
			let add = true;
			let randomNumber = Math.floor(Math.random() * this.highest) + 1;

			for (let y = 0; y < this.highest; y++) {
				if (numbers[y] === randomNumber) {
					add = false;
				}
			}

			if (add) {
				numbers.push(randomNumber);
			} else {
				i--;
			}
		}

		numbers.sort((a, b) => a-b);

		return numbers;
	}
}