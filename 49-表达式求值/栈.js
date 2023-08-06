function calculateExpression(s) {
  const stack = [];
  let num = 0;
  let op = "+";
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + parseInt(s[i]);
      if (i !== s.length - 1) {
        continue;
      }
    }
    if (s[i] === "(") {
      const res = calculateExpression(s.slice(i + 1));
      num = res[0];
      i += res[1] + 1;
      if (i !== s.length - 1) {
        continue;
      }
    }

    switch (op) {
      case "+":
        stack.push(num);
        break;
      case "-":
        stack.push(-num);
        break;
      case "*":
        const temp = stack.pop();
        stack.push(temp * num);
        break;
      case "/":
        const tempDiv = stack.pop();
        stack.push(Math.floor(tempDiv / num));
        break;
    }

    num = 0;
    if (s[i] === ")") {
      break;
    } else {
      op = s[i];
    }
  }

  let sum = 0;
  while (stack.length > 0) {
    sum += stack.pop();
  }

  return [sum, i];
}
function solve(s) {
  const res = calculateExpression(s);
  return res[0];
}
