let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function transverseMatrix(matrix) {
    let n = matrix.length - 1;
    for(let i=0; i<=n; i++) {
        for(let j=0; j<=i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

function inverseMatrix(matrix) {
    let n = matrix.length - 1;
    let left = 0;
    let i = 0;
    let right = n;
    let temp;
    while(i<=n) {
        temp = matrix[i][left];
        matrix[i][left] = matrix[i][right];
        matrix[i][right] = temp;
        left++;
        right--;
        if(left > right) {
            i++;
            left = 0;
            right = n;
        }
    }
    return matrix;
}

function rotateMatrix90Deg(matrix) {
    /* let n = matrix.length - 1;
    for(let i=0; i<=n; i++) {
        for(let j=0; j<=i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    } */
    matrix = transverseMatrix(matrix);
    matrix = inverseMatrix(matrix);
    /* for(let i=0; i<=n; i++) {
        for(let j=0; j<=n-2; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j];
            matrix[i][n-j] = temp;
        }
    }  */
    
    console.log(matrix)
}

rotateMatrix90Deg(matrix);