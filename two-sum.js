// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums,target){
   //let num1=0
    //let num2=0
for (let i =0; i<nums.length;i++){
    for (let x=0; x < nums.length; x++){
        //while(nums[x+1]!=undefined && num1<nums.length){
        // console.log(nums[i],nums[x+1])
        // num1++
   // }

        // return (nums[x+1])
        //console.log(nums[i], nums[x+1])
    if(nums[i]+nums[x]===target && i != x){
             newArr=[i,x]
           return newArr
            }
        //     continue
        // }

    }
}

}
arr=[3,2,4]
target=6
console.log(twoSum(arr,target))