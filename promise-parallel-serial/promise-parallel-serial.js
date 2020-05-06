//使用promise.all()
//使用promise.rac()
//使用async和awaite

function Promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('俺成功了');
        }, 2000)
    }).then((data) => {
        console.log(data);
    })
}

function Promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('俺还是成功了');
        }, 3000)
    }).then((data) => {
        console.log(data)
    })
}

//实现串行
(async () => {
    let promise1 = await Promise1();
    let promise2 = await Promise2();
})();

//实现并行
(async () => {
    let promise1 = new Promise1();
    let promise2 = new Promise2();
    await promise1;
    await promise2;
})()



