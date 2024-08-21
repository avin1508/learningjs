// javascript string built in methods

// charAt()
// charCodeAt()
// concat()
// includes()
// endsWith()
// indexOf()
// lastIndexOf()
// localeCompare()
// match()
// matchAll()
// normalize()
// padEnd()
// padStart()
// repeat()
// replace()
// replaceAll()
// search()
// slice()
// split()
// startsWith()
// substr() (deprecated)
// substring()
// toLocaleLowerCase()
// toLocaleUpperCase()
// toLowerCase()
// toUpperCase()
// trim()
// trimEnd() / trimRight()
// trimStart() / trimLeft()
// valueOf()


///empty string

// Check if a string is empty
function isEmpty(str) {
    return str.length === 0;
}

console.log(isEmpty('avin')); // false
console.log(isEmpty(''));     // true

// Compare length of two strings
function compareStringLength(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else if (str2.length > str1.length) {
        return str2;
    } else {
        console.log('Both strings have the same length');
    }
}

console.log(compareStringLength('avin', 'avin'));          // Both strings have the same length
console.log(compareStringLength('avinash', 'avin'));       // 'avinash'
console.log(compareStringLength('avinash', 'avinash kumar')); // 'avinash kumar'

// Pad start and pad end
let name = 'aviansh';

console.log(name.padStart(10, '-')); // '----aviansh'
console.log(name.padEnd(15, '-'));   // 'aviansh--------'

function leftRightPadding(str, targetLength, padChar = '', direction = 'right') {
    if (direction === 'right') {
        return str.padEnd(targetLength, padChar);
    } else if (direction === 'left') {
        return str.padStart(targetLength, padChar);
    }

    return str;
}

console.log(leftRightPadding('avinash', 10, '*'));        // 'avinash***'
console.log(leftRightPadding('avinash', 10, '*', 'left')); // '***avinash'

// Split method in string
let singleCharName = 'a';

console.log(typeof singleCharName); // 'string'

console.log(singleCharName.split('')); // ['a']

const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJhdmluYXNoIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NzA5NTk1LCJleHBpcmF0aW9uIjoidG9rZW4iLCJleHBvcnRzX2V4cGlyYXRpb24iOiIxIn0.PQ1Chw58AeDFYd4w_8OZ2r6gK_h4e5dsKRAic_Yz8oA';

console.log(authHeader.split(' ')[1]);

// Count words in a string
function countWords(str) {
    if (str.length === 0) {
        return 0;
    } else {
        return str.trim().split(/\s+/).length;
    }
}

console.log(countWords('my name is avinash kumar')); // 5

// charAt method
function indexAt(str, index) {
    return str.charAt(index);
}

console.log(indexAt('avinash', 8)); // ''
console.log(name.charAt(0)); // 'A'
console.log(name.charAt(name.length - 1)); // 'h'

// Concat method
function concat(str1, str2) {
    return str1.concat(str2);
}

console.log(concat('avinash', 'kumar')); // 'avinashkumar'
console.log('java'.concat('script is awesome')); // 'javascipt is awesome'

// Result of concat when one string is empty
console.log('avinash'.concat('')); // 'avinash'
console.log('filename'.concat('.txt')); // 'filename.txt'

// includes method
function checkSubstr(str, substr) {
    return str.includes(substr);
}

console.log(checkSubstr('avinash', 'nsh')); // false
console.log(checkSubstr('avinash', 'avi')); // true

let arr = ["avinash", "abhishek", "rahul", "gautam"];

console.log(arr.includes("abhishek")); // true

let firstname = 'aviansh';
console.log(firstname.includes('V'.toLowerCase())); // false

// endsWith method
function endsWith(str, substr) {
    return str.endsWith(substr);
}

console.log(endsWith('aviansh kumar', 'kumar')); // true
console.log('javaScript'.endsWith('script')); // false
console.log("myfile.txt".endsWith('.txt')); // true



function capitalize(str) {
    return str.split('').map(char => char.toUpperCase());
}

console.log(capitalize('avinashkumar'));


//count the character of string
const str = "hello world";

const countCharacterOfString = (str) =>{
    return str.split('').reduce((acc,char)=>{
        if(char !== ' ')
        {
            if(!acc[char])
            {
                acc[char] = 1
            }
            else{
                acc[char]++
            }
        }
        return acc
    },{})
}

let characterArray = countCharacterOfString(str)
console.log(characterArray)

//output  { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }