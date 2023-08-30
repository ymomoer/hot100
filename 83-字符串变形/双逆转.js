function trans(s, n) {
  //write code here
  let arr = s.split(" ").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split("");
    for (let j = 0; j < str.length; j++) {
      let code = str[j].charCodeAt();
      str[j] = String.fromCharCode(code < 97 ? code + 32 : code - 32);
    }
    res.push(str.join(""));
  }
  return res.join(" ");
}

module.exports = {
  trans: trans,
};
