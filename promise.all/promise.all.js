function promise1() {
    return new Promise((resolve, reject) => {
        resolve('俺成功1');
    }).then((data) => {
        console.log(data)
    })
}

function promise2() {
    return new Promise((resolve, reject) => {
        resolve('俺成功2')
    }).then((data) => {
        console.log(data)
    })
}

async function all(iterable) {

    if (!Array.isArray(iterable)) {
        throw('parameter promiseArr must be an array');
    }
    if (iterable.length === 0) {
        return [];
    }

    let [first, ...others] = iterable;
    return [(await first), ...(await others)]
}

all([new promise1(), new promise2()]);






