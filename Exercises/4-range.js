'use strict';

const range = (start, end) => {
   const resultArray = [];
   if (start > end) return resultArray;

   for (let curNumber = start; curNumber <= end; curNumber++) {
      resultArray.push(curNumber);
   }

   return resultArray;
};

module.exports = { range };
