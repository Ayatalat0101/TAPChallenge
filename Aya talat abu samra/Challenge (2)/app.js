function majorityElement(nums) {
  const count = {};
  const majority = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] > majority) {
      return num;
    }
  }
}


