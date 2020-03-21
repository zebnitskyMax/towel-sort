
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  return matrix.reduce(function (prev, curr, i) {
    return prev.concat(i % 2 === 1 ? curr.reverse() : curr)
}, [])
}
