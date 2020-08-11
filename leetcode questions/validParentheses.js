const input = "([)]";

const isValid = (s) => {
  if (s.length % 2 == 1) return false; //if there is an odd number of symbols,
  //must be false since we have an unmatched pair.
  let brackets = {
    //left brackets as keys, right as their respective values
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];
  for (i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      //push the open bracket into the stack
      stack.push(s[i]);
    } else {
      //meet close bracket, let's check if we have a correct matching expression (now working inside)
      let open = stack.pop();
      //pop from top of stack
      if (s[i] != brackets[open]) {
        //if they match, nice! if they don't match this means not valid expression
        return false;
      }
    }
  }
  return !stack.length; //if stack length == 0, return true. (true if stack !exist)
};

console.log(isValid(input));

/*

const validParenthesis = s => {
    if (s.length % 2 == 1) return false; //if there is an odd number of symbols,
  let brackets {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = []
  for (i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(brackets[s[i]])
    } else{
      let open = stack.pop()
      if (!brackets[open] || s[i] != brackets[open]) {
        return false
      }
    }
  }

}


*/
