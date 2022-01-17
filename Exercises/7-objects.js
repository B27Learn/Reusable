'use strict';

const fn = () => {
    const obj = { name: "" };
    let obj2 = { name: "" };
    
    obj.name = "Fill";
    obj2.name = "Will";

    const obj3 = { name: "" };
    // constant variable
    // obj = obj3;
    obj2 = obj3;
};

module.exports = { fn };
