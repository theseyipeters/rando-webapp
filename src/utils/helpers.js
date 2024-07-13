export const pickFirstLetter = (word) => {
	if (typeof word !== "string" || word.length === 0) {
		throw new Error("Input must be a non-empty string");
	}
	const firstLetter = word[0];
	const restOfWord = word.substring(1);
	return firstLetter;
};
