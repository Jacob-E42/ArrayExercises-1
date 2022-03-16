//Double values
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (el) {
        newArr.push(el * 2)
    });
    return newArr;
}

//onlyEvenValues
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (el) {
        if ((el % 2 === 0) && el !== 0) {
            newArr.push(el);
        }
    })
    return newArr;
}

//showFirstAndLast
function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val[0] + val[val.length - 1]);
    })
    return newArr;
}

//addKeyAndValue
function addKeyAndValue(arr, key, val) {

    arr.forEach(function (el) {
        el[key] = val;
    })
    return arr;
}

//vowelCount
function vowelCount(str) {
    let obj = {};
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    const arr = str.split('');
    arr.forEach(function (letter) {

        if (letter.toLowerCase() === 'a') {
            a++;
            obj['a'] = a;
        }
        if (letter.toLowerCase() === 'e') {
            e++;
            obj['e'] = e;
        }
        if (letter.toLowerCase() === 'i') {
            i++;
            obj['i'] = i;
        }
        if (letter.toLowerCase() === 'o') {
            o++;
            obj['o'] = o;
        }
        if (letter.toLowerCase() === 'u') {
            u++;
            obj['u'] = u;
        }
    })

    return obj;
}

//doubleValuesWithMap
function doubleValuesWithMap(arr) {
    const doubledValues = arr.map(function (num) {
        return num * 2;
    })
    return doubledValues;
}

//valTimesIndex
function valTimesIndex(arr){
    const multipliedValues = arr.map(function(num, i){
        return num * i;
    })
    return multipliedValues;
}

//extractKey
function extractKey(arr, key){
    const newArr = arr.map(function(obj){
        return obj[key]
    })
    return newArr;
}

//extractFullName
function extractFullName(arr){
    const fullNames = arr.map(function(obj){
        return obj.first+ " " + obj.last;
    })
    return fullNames;
}

//filterByValue
function filterByValue (arr, key){
    return arr.filter(function(obj){
        return obj[key];
    })
}

//find
function find(arr, val){
    return arr.filter(function(el){
        return el === val;
    })[0]
}

//findInObj
function findInObj(arr, key, value){
    return arr.filter(function(obj, i){
        return obj[key] === value; 
    })[0]
}

//removeVowels
function removeVowels(str){
    let arr = Array.from(str.toLowerCase());
    return arr.filter(function(letter){
        let vowels = 'aeiou';
        return !vowels.includes(letter);
    })
}

//doubleOddNumbers
function doubleOddNumbers(arr){
    return arr.filter(function(num){
        return num % 2 !== 0;
    }).map(function(num){
        return num * 2;
    })
}
