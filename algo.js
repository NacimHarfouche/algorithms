/****************************************************************/
/** The difficulty level of the exercises gradually increases **/
/**************************************************************/

/**
 * The function "returnInt" must return the integer 16.
 */
function returnInt(){
	return 16;
}

/**
 * The function "multiply" will take an integer parameter and must return this integer multiply by 3.
 */
function multiply(a) {
	return a * 3;
}

/**
 * The function "addZ" will take a character string and return it followed by the character 'Z'.
 */
function addZ(chaine) {
	return `${chaine}Z`;
}

/**
 * The function "biggest" will take in parameter 2 numbers and will have to return the biggest. 
 * If the 2 numbers are equal, return one of them.
 */
function biggest(n1, n2) {
	if (n1 >= n2) return n1;
	return n2;
}

/**
 * The function "bigWord" will take in parameter 2 string and will have to return the largest one. 
 * If the length of the two strings are identical, the function will have to return the first one.
 */
function bigWord(string1, string2) {
	if (string1.length >= string2.length) return string1;
	return string2;
}

/**
 * The function "prime" will take 2 parameters first an integer representing the salary of an employee and the second a boolean representing the bonus. 
 * If the bonus variable is true then the pay will be multiplied by 10. 
 * The function will have to return the salary of the employee prefixed with '£'.
 */
function prime(paie, boleen) {
	if (boleen) paie *= 10;
	return `£${paie}`;
}

/**
 * To populate a table or a database is to fill it with value, to feed it with data.
 * The function "populate" will take 1 integer as parameter and will have to return an array having the same number of input.
 * Example : populate(5) => [0,1,2,3,4]. You can use a method of the Array object. 
 */
function populate(nb) {
	let array = [];
	for (let i = 0; i < nb; i++)
		array.push(i);
	return array;
}

/**
 * The function "nbDiviseur" will take 1 integer as parameter and will have to return his number of dividers.
 * Example : nbDiviseur(5) => 2 the dividers are 1 and 5.
 * You can use a method of the Number object.
 */
function nbDiviseur(nb) {
	let reponse = 0;
	for (let i = 1; i <= nb; i++)
		if ((nb % i) === 0) reponse++;
	return reponse;
}

/**
 * The function "unscrambled" will take as parameter 1 string and will have to return a string without the occurrences of the word oeuf.
 * Example : unscrambled('doeufioeufx') => dix.
 * You can use a method of the String object and a method of the Array object.
 */
function unscrambled(string) {
	return string.replace(/oeuf/g, "");
}

/**
 * The function "mirror" will take as parameter 1 string and will have to return it upside down.
 * Example : mirror('test') => tset.
 * You can use a method of the String object and a method of the Array object.
 */
function mirror(string) {
	let word = "";
	for (let i = string.length - 1; i >= 0; i--)
		word += string[i];
	return word;
}