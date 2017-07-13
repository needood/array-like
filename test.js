let t = (new Date).getTime();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let i = 100000;
//
while (i--) {
    Object.assign([], arr);
    [].length = arr.length;
}


console.log('assign:', (new Date).getTime() - t);

t = (new Date).getTime();

i = 100000;


while (i--) {
    Array.prototype.push.apply([], arr)
}
console.log('push:', (new Date).getTime() - t);

const Arr = require('./dist/bundle.js')



t = (new Date).getTime();

i = 100000;


while (i--) {
    new Arr(arr)
}
console.log('new Arr:', (new Date).getTime() - t);


let testArr = new Arr(arr)

t = (new Date).getTime();

i = 100000;

while (i--) {
    Array.prototype.splice.call(testArr, 0)
    Array.prototype.push.apply(testArr, arr)
}
console.log('splice and push', (new Date).getTime() - t);
Array.prototype.splice.call(testArr, 0)
Array.prototype.push.apply(testArr, [90])

console.log(testArr[0], testArr[1])