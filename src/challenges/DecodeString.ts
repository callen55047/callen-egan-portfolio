function DecodeString(s: string): string {
  const stack: (string | number)[] = [];
  let currentNum = 0;
  let currentStr = "";

  for (const char of s) {
    if (char === '[') {
      // push num, str
      stack.push(currentNum);
      stack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if (char === ']') {
      // complete the operation and add to current string
      // pop str, num - reverse order of pushing
      const savedStr = stack.pop() as string;
      const multiplier = stack.pop() as number;
      currentStr = savedStr + currentStr.repeat(multiplier);
      // check if char is numeric (/d = decimal)
    } else if (/\d/.test(char)) {
      currentNum = Number(`${currentNum}${char}`);
    } else {
      currentStr += char;
    }
    console.log(`loop char: ${char} stack: ${stack}`);
  }

  return currentStr;
};