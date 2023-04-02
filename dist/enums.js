"use strict";
// useful for restricting user's choice
//defined as starting at 0, but can be overridden
// this syntax generates an ugly looking IFFE when transpiled to JS
var SeatChoice;
(function (SeatChoice) {
    // changed from 0 to 10
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    // autoincrements to 11
    SeatChoice[SeatChoice["MIDDLE1"] = 11] = "MIDDLE1";
    // changed from 12 to "window"
    SeatChoice["WINDOW"] = "window";
})(SeatChoice || (SeatChoice = {}));
const mySeat = SeatChoice.AISLE; // transpiled to JS, becomes a weird looking IFFE
const newSeat = SeatChoice.AISLE; // transpiled to JS, becomes "const newSeat = 0"
// NOTE: declaring as "const" is probably better for me.  The point of using TS for me is to create JS code that is strictly typed.  Having the transpiled JS be cleaner is preferable if I need to edit the raw JS output.
// TODO:  see online discussion on this topic  
