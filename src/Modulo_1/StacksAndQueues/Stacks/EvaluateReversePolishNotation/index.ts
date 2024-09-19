function evalRPN(tokens: string[]) {
  let stack: number[] = [];
  let operators = ['+', '-', '*', '/'];

  for(let i = 0; i < tokens.length; i++) {
    if(!operators.includes(tokens[i])) {
        stack.push(Number(tokens[i]));
    } else {
        let result = 0;

        let a = stack.pop();
        let b = stack.pop();

        if(a && b) {
          if(tokens[i] === '+') {
            result = (a + b);
          } 
          if(tokens[i] === '-') {
              result = (a - b);
          }
          if(tokens[i] === '*') {
              result = (a * b);
          }
          if(tokens[i] === '/') {
              result = b / a;
              if (result > 0) {
                  result = Math.floor(result);
              } else {
                  result = Math.ceil(result);
              }
          }
          stack.push(result)
        }
    }
  }

  return stack.pop();
};

//Complexidade de tempo: O(n)
//Complexidade de espaço: O(n)