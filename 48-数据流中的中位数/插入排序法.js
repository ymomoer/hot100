let arr = [];
function Insert(num) {
  if (arr.length === 0) {
    arr.push(num);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (num < arr[i]) {
        arr.splice(i, 0, num);
        return;
      }
    }
    arr.push(num);
  }
}
function GetMedian() {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
}
