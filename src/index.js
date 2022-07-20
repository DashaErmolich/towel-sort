
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix === undefined) {
        return [];
    }

    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
      let matrixArr = matrix[i];
      if (i % 2 !== 0) {
        matrixArr = matrixArr.reverse();
        newMatrix.push(matrixArr);
      }  else {
        newMatrix.push(matrixArr);
      }
     }
    
    let result = [];
    
    for (let i = 0; i < newMatrix.length; i ++) {
      result.push(...newMatrix[i])
    }
    
    return result;
}
