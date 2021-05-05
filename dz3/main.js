
function multiplyMatrices(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
      result[i] = [];
      for (var j = 0; j < m2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < m1[0].length; k++) {
              sum += m1[i][k] * m2[k][j];
          }
          result[i][j] = sum;
      }
  }
  return result;
}

var m1 = [[1,2],[3,4]]
var m2 = [[5,6],[7,8]]

var mResult = multiplyMatrices(m1, m2)

console.table(mResult)
const items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
   
  const result = {
      targetIndex: 0,
      sum: 0
  };
   
   
  for(let i = 0; i < items.length; i++) {
      const currentSum = items[i].reduce((prev, current) => prev + current);
      if (result.sum <= currentSum) {
          result.sum = currentSum;
          result.targetIndex = i + 1;
      }
  }
   
  console.log(`Номер столбца двумерного массива сумма которого является максимальной - ${result.targetIndex}`);
  console.log(`Сумма - ${result.sum}`);

  let mas = [
    [0, -2, 5, 7],
    [5, -5, 1, 0],
    [2, 3, -1, 4]
  ];
  function cut(arr) {
    let columns = new Array(arr[0].length).fill(1);
    let res = [];
    for (let i = 0; i < arr[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (!arr[j][i]) {
          columns[i] = 0;
          break;
        }
        sum += arr[j][i];
      }
      if (sum <= 0) {
        columns[i] = 0;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      res.push([]);
      for (let j = 0; j < columns.length; j++) {
        if (columns[j]) {
          res[i].push(arr[i][j]);
        }
      }
    }
    return res;
  }
  console.log(cut(mas));