const _ = {
	clamp(number, lower, upper) {
		const lowerClampedValue = Math.max(number, lower);
		const clampedValue = Math.min(lowerClampedValue, upper);
		return clampedValue;
	},
	inRange(number, start, end) {
		if (end === undefined) {
			end = start;
			start = 0;
		}
		if (start > end) {
			var temp = end;
			end = start;
			start = temp;
		}
		var isInRange = start <= number && number < end;
		return isInRange;
	},
	words(string) {
		var words = string.split(' ');
		return words;
	},
	pad(string, length) {
		if (string.length >= length) {
			return string;
		}
		const startPaddingLength = Math.floor((length - string.length) / 2);
		const endPaddingLength = length - string.length - startPaddingLength;

		const paddedString =
			' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

		return paddedString;
	},
	has(object, key) {
		const hasValue = object[key];
		if (hasValue != undefined) {
			return true;
		} else return false;
		return hasValue;
	},
	invert(object) {
		let invertedObject = {};
		for (let key in object) {
			const originalValue = object[key];
			invertedObject = { originalValue: key };
		}
		return invertedObject;
	},
	findKey(object, predicate) {
		for (let key in object) {
			var value = object[key];
			let predicateReturnValue = predicate(value);
			if (predicateReturnValue === true) {
				return key;
			}
		}
		undefined;
		return undefined;
	},
	drop(arr, num) {
		if (num === undefined) {
			num = 1;
		}
		const droppedArray = arr.slice(num, arr.length);
		return droppedArray;
	},
	dropWhile(arr, pred) {
		const callBack = (element, index) => {
			return !pred(element, index, arr);
		};
		let dropNumber = arr.findIndex(callBack);
		let droppedArray = this.drop(arr, dropNumber);
		return droppedArray;
	},
	chunk(arr, size) {
		if (size === undefined) {
			size = 1;
		}
		let arrayChunks = [];
		for (let i = 0; i < arr.length; i += size) {
			let arrayChunk = arr.slice(i, i + size);
			arrayChunks.push(arrayChunk);
		}
		return arrayChunks;
	},
};

module.exports = _;
