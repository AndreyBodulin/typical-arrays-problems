
exports.min = function min (array) {
  let min = 10000;
  console.log(array);
  if (typeof array != 'undefined'){
    for (let i = 0; i < array.length; i++){
      if (array[i] < min) min = array[i];
    }
  }
  if (min == 10000) min = 0;
  return min;
}

exports.max = function max (array) {
  let max = -10000;
  if (typeof array != 'undefined'){
    for (let i = 0; i < array.length; i++){
      if (array[i] > max) max = array[i];
    }
  }
  if (max == -10000) max = 0;
  return max;
}

exports.avg = function avg (array) {
  let avg = 0;
  let sum = 0;
  if (typeof array != 'undefined'){
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    if (array.length != 0) avg = sum / array.length;
  }
  return avg;
}
