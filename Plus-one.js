var plusOne = function(digits) {
    if ((digits[digits.length-1]+1)<10){
   digits[digits.length-1]+=1
   return digits
    }else if((digits[digits.length-1]+1)==10) {
        lastNum=digits[digits.length-1]+1
    digits.push(0)
    return  digits
        
    }
    
};

console.log(plusOne([4,3,2,9]))