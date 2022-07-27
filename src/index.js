
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let tmp = [];
  if (matrix) {
    const LEN = matrix.length;
  for (let i = 0; i < LEN; i ++) {
    let len = matrix[i].length;
    if (!(i%2)){
      for (let j = 0; j < len; j++){
        tmp.push(matrix[i][j]);
      }
    } else {
      for( let j = len - 1; j >= 0; j--){
        tmp.push(matrix[i][j]);
      }
    }
  }
  return tmp;
  } else {
    return [];
  }  
}
