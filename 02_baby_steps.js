var sum = 0;
var nums = process.argv


for (i = 0; i < nums.length; i++) { 
  num = nums[i];
  if (!isNaN(num)) {
    sum += +num;
  }
}

console.log(sum);
// console.log(process.argv);

// var sum = 0;
// var nums = process.argv

// console.log(nums);

// for (arg in nums) { 
//   if (!isNaN(arg)) {
//     console.log(arg);
//     sum += +arg;
//   }
// }


// console.log(sum);