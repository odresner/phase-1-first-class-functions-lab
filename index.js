const returnFirstTwoDrivers=function(drivers){
    let driver1=drivers[0]
    let driver2=drivers[1]
    let returndrivers= [driver1,driver2];
    return returndrivers
}
const returnLastTwoDrivers=function(drivers){
    let driver1=drivers[drivers.length-1]
    let driver2=drivers[drivers.length-2]
    let returndrivers= [driver2,driver1]
    return returndrivers
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(input){
    return function(){
        return input*input
    }
}

//console.log(returnFirstTwoDrivers(["line1","line2","line3"]))
    


