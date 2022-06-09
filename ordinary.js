function asyncFunc1(){
    console.log("処理1開始");
    //1秒後に「処理完了」を表示
    done()
}

function asyncFunc2(){
    console.log("処理2開始");
    //1秒後に「処理完了」を表示
    done()
}

function asyncFunc3(){
    console.log("処理3開始");
    //1秒後に「処理完了」を表示
    done()
}

function done(){
    console.log("処理完了!");
}

function countFunction(){
    console.log("ordinary strat")
    console.log("-------------------------")
    asyncFunc1()
    console.log("-------------------------")
    asyncFunc2()
    console.log("-------------------------")
    asyncFunc3()
    console.log("-------------------------")
    console.log("ordinary end")
}

countFunction()