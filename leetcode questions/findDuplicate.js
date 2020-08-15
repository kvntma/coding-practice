const findDuplicate = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let number = Math.abs(arr[i]);
    if (arr[number - 1] < 0) {
      return Math.abs(arr[i]);
    } else {
      arr[number - 1] *= -1;
    }
  }
};

//solution explanation

/*
The constraint for this problem is that the integers are bound to the length of the array (no integer
will be larger than the total array).
Therefore, you can safely create an index "net" to catch certain positions.
If you use the absolute value of the integer you're scanning to find an index you then do two things:
you check, is this a negative number? If it's negative it means you've checked it b4 = duplicate.
If not negative, then set it to negative.

*/
