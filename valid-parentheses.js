var isValid = function (s) {
  cnt = 0;
  // openPcount=0
  // closePcount=0
  // openBcount=0
  // closeBcount=0
  // openCBcount=0
  // closeCBcount=0
  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[i + 1]) {
      cnt += 0.5;
    } else {
      cnt += 1;
      i++;
      console.log(i)
    }console.log(cnt)
    if (Number.isInteger(cnt)) {
      return true;
    } else {
      return false;
    }
  }
};
//     }
//     if (openBcount===openCBcount&&closeBcount===closeCBcount&&openPcount===closePcount){
//         return true
//     }else{
//         return false
//     }
// };

console.log(isValid("()[]{}"));
