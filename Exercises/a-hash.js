'use strict';

const phonebook = {
    Will: "+790245614523",
    Fill: "+790245614523",
    Whhh: "+780245614523",
    Wuill: "+797245614523",
    Fevill: "+790235614523",
    WMil: "+790245214523",
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
