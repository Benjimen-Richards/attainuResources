const abc = () => {
    const n = 10
    let res1 = 0
    let res2 = 0
    let temp = 0
    for (i = 1; i <= n; i++) {
        res1 = res1 + i * i
    }
    for (i = 1; i <= n; i++) {
        temp = temp + i
        res2 = Math.pow(temp, 2)
    }
    if (res1 > res2) {
        console.log(res1 - res2)
    }
    else {
        console.log(res2 - res1)
    }
}
abc()