'use strict';

const rangeOdd = (start, end) => {
    const resultArray = [];
    let curNumber = start % 2 === 0 ? start + 1 : start;
    if (curNumber > end) return resultArray;

   for (curNumber; curNumber <= end; curNumber += 2) {
      resultArray.push(curNumber);
   }

   return resultArray;
};

module.exports = { rangeOdd };
