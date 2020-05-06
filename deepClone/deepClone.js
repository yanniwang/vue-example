// function deepClone(obj) {
//     function isObject(o) {
//         return (typeof o === 'object' || typeof o === 'function') && o !== null;
//     }
//
//     if (!isObject(obj)) {
//         throw new Error('not Object');
//     }
//
//     let isArray = Array.isArray(obj);
//     let newObj = isArray ? [...obj] : {...obj};
//     Reflect.ownKeys(newObj).forEach((key) => {
//         newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
//     })
//
//     return newObj;
// }

function deepClone(obj) {
    //判断是否是对象是函数
    function isObject(o) {
        return (typeof o === 'function' || typeof o === 'object') && o !== null;
    }

    if (!isObject(obj)) {
        throw new Error('not object');
    }

    let isArray = Array.isArray(obj);
    let newObj = isArray ? [...obj] : {...obj};
    Reflect.ownKeys(newObj).forEach((key) => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
    })

    return newObj;
}


let a = {
    b: 1,
    c: {
        d: 2
    }
}

let b = deepClone(a);
console.log(b.c.d);




