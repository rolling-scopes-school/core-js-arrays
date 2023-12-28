function distinct(arr) {
    const newArr = [];
    return arr.reduce((acc, cur) => {
        acc.includes(cur) ? acc : acc.push(cur);
        return acc;
    }, newArr);
  }

  console.log(distinct([1, 2, 3, 3, 2, 1]))