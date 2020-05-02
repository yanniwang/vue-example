//instanceof 是通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype
//B。prototype指向原型， 则需要判断A中是否与B的原型

// function myInstanceof(left, right) {
//     let prototype = right.prototype
//     left = left.__proto__
//     while (true) {
//         if (left === null || left === undefined)
//             return false
//         if (prototype === left)
//             return true
//         left = left.__proto__
//     }
// }


function instanceOf(left, right) {
    left = left.__proto__;
    right = right.prototype;
    while (true) {
        if (left === null || left === undefined) {
            return false
        }
        if (left === right) {
            return true
        }
    }
}

const a = {b : 1};
console.log(instanceOf(a, Object));
