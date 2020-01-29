/*
CHALLENGE
**********

    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/
// LONG FORM
//*** look up .toFixed for formatting to a desired number of decimals */
function tipCalc(billAmt, tipAmt) {
    return billAmt * (1 +tipAmt);
}

let totAmt = tipCalc(19.34, .22);
console.log(totAmt);

// CONCISE BODY, FAT ARROW
let tipCalc = (billAmt, tipAmt) => billAmt * (1 +tipAmt);
let totAmt = tipCalc(100, .20);
console.log(totAmt);

// BLOCK BODY, FAT ARROW
let tipCalc = (billAmt, tipAmt) => {
    return billAmt * (1 +tipAmt);
}
let totAmt = tipCalc(100, .20);
console.log(totAmt);
