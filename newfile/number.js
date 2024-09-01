//first basic problem 
const roundOff = (number,degit) =>{
    let factor = Math.pow(10,2);
    return Math.round(number * factor)/factor
}

console.log(roundOff(2.4567, 3));

//compound intrest

const compondIntrest = (principal, rate, time, n) =>{
    let principalamnt = principal * Math.pow((1 + rate/n),(n * time))
    return Math.round(principalamnt*100)/100
}


console.log(compondIntrest(1000, 0.05, 10, 12));

// missing number 

const findMissingNumber = (arr) =>{
    const size = arr.length+1;
    const expectedSum = (size*(arr[0] + arr[arr.length - 1]))/2;
    const actualSum = arr.reduce((sum, num)=> sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([2, 4, 8, 10]));
console.log(findMissingNumber([10, 13, 19, 22]));