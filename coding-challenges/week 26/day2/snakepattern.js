// Snake-Pattern

// Given an n x n matrix .In the given matrix, you have to print the elements of the matrix in the snake pattern. Input :mat[][] = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]]; Output : 10 20 30 40 45 35 25 15 27 29 37 48 50 39 33 32
const pattern = () => {
    const matrix = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]]
    // console.log('yes')
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            res.push(matrix[i])
        }
        else {
            res.push(matrix[i].reverse())
        }
    }
    var ans = []
    for (i = 0; i < res.length; i++) {
        for (j = 0; j < res[i].length; j++) {
            ans.push(res[i][j])
        }

    }
    console.log(ans.join(' '))
}
pattern()