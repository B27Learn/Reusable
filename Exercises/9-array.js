'use strict';

const phonebook = [
    { name: "Will", phone: "+790245614523"},
    { name: "Fill", phone: "+790245614523"},
    { name: "Whhh", phone: "+780245614523"},
    { name: "Wuill", phone: "+797245614523"},
    { name: "Fevill", phone: "+790235614523"},
    { name: "WMil", phone: "+790245214523"},
];

const findPhoneByName = (name) => {
    for (rec of phonebook)
        if (name === rec.name) return rec.phone;
};

module.exports = { phonebook, findPhoneByName };
