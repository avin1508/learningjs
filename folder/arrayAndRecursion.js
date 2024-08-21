
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flatArray = (arr) => {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
  
            return acc.concat(flatArray(item));
        }
        return acc.concat(item);
    }, []);
};

const arr = flatArray(nestedArray);
console.log(arr); 


//using for loop

const nestedArray1 = [1, [2, 3]];

const nested = (arr) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ans = ans.concat(nested(arr[i]));
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
};


const tested = nested(nestedArray1);
console.log(tested);  
