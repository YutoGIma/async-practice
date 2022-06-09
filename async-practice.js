async function asyncFunc1(){
    await console.log("処理1開始");
    //1秒後に「処理完了」を表示
    await done()
}

async function asyncFunc2(){
    console.log("処理2開始");
    //1秒後に「処理完了」を表示
    await done()
}

async function asyncFunc3(){
    console.log("処理3開始");
    //1秒後に「処理完了」を表示
    done()
}

function done(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("処理完了!");
            resolve("処理完了")
        },1000);
    })
}

async function countFunction(){
    console.log("async await strat")
    console.log("-------------------------")
    await asyncFunc1()
    console.log("-------------------------")
    await asyncFunc2()
    console.log("-------------------------")
    await asyncFunc3()
    console.log("-------------------------")
    console.log("async await end")
}

countFunction()