/* 

INPUT:  String representing a potential US phone number.
TASK:   Return whether or not input string is valid US phone number based on common formats. 
OUTPUT: Boolean indicating validity of phone number string.  

AUTHOR: Aakash Sudhakar.
SOURCE: Algorithm Challenges on freeCodeCamp.

*/


// ===== ES5 APPROACH =====

function telephoneCheck(str) {
    // logic goes here
}

telephoneCheck("555-555-5555");             // Should return TRUE
telephoneCheck("(555) 555-5555");           // Should return TRUE
telephoneCheck("5555555");                  // Should return FALSE

// ===== ES6 APPROACH =====

const checkIfPhoneNumber = (str) => {
    // logic goes here
}

checkIfPhoneNumber("(757) 269-8414");       // Should return TRUE
checkIfPhoneNumber("1 (757) 269-8414");     // Should return TRUE
checkIfPhoneNumber("-2 (757) 269-8414");    // Should return FALSE