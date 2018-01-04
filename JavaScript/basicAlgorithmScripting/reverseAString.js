/* 

INPUT:      Given string.
TASK:       Reverse given string.
OUTPUT:     Reversed string.

AUTHOR:     Aakash Sudhakar.
SOURCE:     Algorithm Challenges on freeCodeCamp.

*/


const reverseString = (str) => {
    return str.split("").reverse().join("");
};

reverseString("hello");                         //  =>  "olleh"
reverseString("goodbye");                       //  =>  "eybdoog"
reverseString("Howdy");                         //  =>  "Howdy"
reverseString("Greetings from Earth");          //  =>  "Greetings from Earth"