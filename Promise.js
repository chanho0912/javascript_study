const job_1 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(1);
    }, b)
}

const job_2 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(2);
    }, b)
}

const job_3 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(3);
    }, b)
}

// job_1();
// job_2();
// job_3();


const a = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 100;

        setTimeout(() => {
            console.log(1)
            resolve(1)
        }, delay)
    })
}

const b = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 100;

        setTimeout(() => {
            console.log(2)
            resolve(2)
        }, delay)
    })
}

const c = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 100;
        reject("error code");
        setTimeout(() => {
            console.log(3)
            resolve(3)
        }, delay)
    })
}

// a().then(ret => b()).then(ret => c());

// const main = async() => {
//     await a();
//     await b();
//     await c();
// }

// main();

// c().then(ret => {
//     console.log(ret);
// }).catch(e => {
//     console.log(`${e}라는 에러 발생`);
// })

/*

Promise is a Javascript Object for asynchronous operation.
state => fulfilled or rejected
Producer vs Consumer

*/

// Producer
// When new Promise is created, the executor runs automatically.
// const promise = new Promise((resolve, reject) => {
//     // doing some heavy work ()
//     // Promise 가 생성되는 순간 실행됨.
    
//     console.log("doing something");
//     setTimeout(() => {
//         // resolve("chanho")
//         reject(new Error('no network'));
//     }, 2000);
// });

// 2. Consumers: then, catch, finally
// promise.then((value) => {
//     console.log(value);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("finally");
// })

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(value => console.log(value));