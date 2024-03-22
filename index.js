// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    if (someValue > headquarters) {
        return someValue - headquarters;
    } else {
        return headquarters - someValue;
    }
}


function distanceFromHqInFeet(someValue) {
    const headquarters = 42;
    const distanceInBlocks = Math.abs(someValue - headquarters);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    const feetPerBlock = 264;
    
    if (start > destination) {
        return distanceInBlocks * feetPerBlock;
    } else {
        return distanceInBlocks * feetPerBlock;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return fare;
}
