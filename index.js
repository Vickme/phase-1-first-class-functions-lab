
//returnFirstTwoDrivers
const returnFirstTwoDrivers=function(drivers){
   
    return drivers.slice(0,2);
};

//returnLastTwoDrivers
const returnLastTwoDrivers =function(drivers){
       return drivers.slice(-2);
};

//selectingDrivers
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
function FareMultiplier(amount){
    return function(fare){
        return (fare*amount);
    }
};

//fareDoubler
const fareDoubler=createFareMultiplier(2);

//fareTripler
const fareTripler=createFareMultiplier(3);

//selectDifferentDrivers
function selectDifferentDriver(drivers, driverSelector){
    return driverSelector(drivers);
}


