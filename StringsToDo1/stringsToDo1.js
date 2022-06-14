// Strings To Do 1
// Use the JavaScript language for all challenges. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(str) {
    var a = "";
    for(i = 0; i < str.length; i++) {
        if( str[i] != ' ') {
            a += str[i];
        }
    }
    return a;
}
// Examples:
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(str) {
    var a = "";
    for(i = 0; i < str.length; i++) {
        if(!isNaN(str[i])){
            a += str[i];
        }
    }
    return Number(a);
}

// Examples:
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
function acronym(str) {
    a = "";
    if (str[0] != ' ') {
        a += str[0].toUpperCase();
    }
    for(i = 0; i < str.length - 1; i++){
        if (str[i] == ' ') {
            a += str[ i + 1 ];
        }
    }
    return a.toUpperCase();
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".



// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.
function countNonSpaces(str) {
    index = 0;
    for(i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            index++
        }
    }
    return index;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));
// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(strArray,val) {
    var newArray = []
    for( i = 0; i < strArray.length;i++) {
        if(strArray[i].length >= val) {
            newArray.push(strArray[i]);
        }
    }
    return newArray;
}
// Examples:
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']