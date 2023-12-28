function swapHeadAndTail(arr) {
    const halfOfArrayLength = Math.floor(arr.length / 2);
    const leftPart = arr.slice(0, halfOfArrayLength);
    console.log(leftPart)
    const rightPart = arr.slice(halfOfArrayLength);
    return rightPart.concat(leftPart);
  }

  console.log(swapHeadAndTail([1,2, 3]))