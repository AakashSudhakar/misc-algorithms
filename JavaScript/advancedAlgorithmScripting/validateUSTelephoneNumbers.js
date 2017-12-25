/* 

INPUT:      String representing a potential US phone number.
TASK:       Return whether or not input string is valid US phone number based on common formats. 
OUTPUT:     Boolean indicating validity of phone number string.  

AUTHOR:     Aakash Sudhakar.
SOURCE:     Algorithm Challenges on freeCodeCamp.

*/


const telephoneCheck = (str) => {
    // logic goes here
}


telephoneCheck("555-555-5555");             //  =>  true
telephoneCheck("(555) 555-5555");           //  =>  true
telephoneCheck("5555555");                  //  =>  false
telephoneCheck("(757) 269-8414");           //  =>  true
telephoneCheck("1 (757) 269-8414");         //  =>  true
telephoneCheck("-2 (757) 269-8414");        //  =>  false