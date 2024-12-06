const assert = require('assert');
const tasks = require('../src/arrays-tasks');
it.optional = require('../extensions/it-optional');

describe('arrays-tasks', () => {
  it.optional(
    'getIntervalArray should return the array of integers from start to end (inclusive)',
    () => {
      [
        {
          start: 1,
          end: 5,
          expected: [1, 2, 3, 4, 5],
        },
        {
          start: -2,
          end: 2,
          expected: [-2, -1, 0, 1, 2],
        },
        {
          start: 0,
          end: 100,
          expected: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
            53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
            87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
        },
        {
          start: 3,
          end: 3,
          expected: [3],
        },
        {
          start: -5,
          end: -3,
          expected: [-5, -4, -3],
        },
      ].forEach((data) => {
        const actual = tasks.getIntervalArray(data.start, data.end);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'sumArrays should return new array where each element is the sum of the corresponding elements from two arrays',
    () => {
      [
        {
          arr1: [1, 2, 3],
          arr2: [4, 5, 6],
          expected: [5, 7, 9],
        },
        {
          arr1: [10, 20, 30],
          arr2: [5, 10, 15],
          expected: [15, 30, 45],
        },
        {
          arr1: [-1, 0, 1],
          arr2: [1, 2, 3, 4],
          expected: [0, 2, 4, 4],
        },
        {
          arr1: [],
          arr2: [1, 2, 3, 4],
          expected: [1, 2, 3, 4],
        },
        {
          arr1: [1, 2, 3, 4],
          arr2: [],
          expected: [1, 2, 3, 4],
        },
      ].forEach((data) => {
        const actual = tasks.sumArrays(data.arr1, data.arr2);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'findElement should return the index of specified value if exists',
    () => {
      [
        {
          arr: ['Ace', 10, true],
          value: 10,
          expected: 1,
        },
        {
          arr: ['Array', 'Number', 'string'],
          value: 'Date',
          expected: -1,
        },
        {
          arr: [0, 1, 2, 3, 4, 5],
          value: 5,
          expected: 5,
        },
      ].forEach((data) => {
        const actual = tasks.findElement(data.arr, data.value);
        assert.equal(
          actual,
          data.expected,
          `Index of '${data.value}' inside of [${data.arr}] = ${data.expected}, but actually ${actual}`
        );
      });
    }
  );

  it.optional(
    'findAllOccurrences should return the number of all occurrences of specified item in an array',
    () => {
      [
        {
          arr: [0, 0, 1, 1, 1, 2],
          item: 1,
          expected: 3,
        },
        {
          arr: [1, 2, 3, 4, 5],
          item: 0,
          expected: 0,
        },
        {
          arr: ['a', 'b', 'c', 'c'],
          item: 'c',
          expected: 2,
        },
        {
          arr: [null, undefined, null],
          item: null,
          expected: 2,
        },
        {
          arr: [true, 0, 1, 'true'],
          item: true,
          expected: 1,
        },
      ].forEach((data) => {
        const actual = tasks.findAllOccurrences(data.arr, data.item);
        assert.equal(
          actual,
          data.expected,
          `Number of occurrences of ${JSON.stringify(
            data.item
          )} in ${JSON.stringify(data.arr)} is ${
            data.expected
          }, but actually ${actual}`
        );
      });
    }
  );

  it.optional(
    'removeFalsyValues should return the specified array without falsy values',
    () => {
      [
        {
          arr: [0, false, 'cat', NaN, true, ''],
          expected: ['cat', true],
        },
        {
          arr: [1, 2, 3, 4, 5, 'false'],
          expected: [1, 2, 3, 4, 5, 'false'],
        },
        {
          arr: [false, 0, NaN, '', undefined],
          expected: [],
        },
      ].forEach((data) => {
        const actual = tasks.removeFalsyValues(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'getStringsLength should return an array containing the lengths of each string',
    () => {
      [
        {
          arr: ['', 'a', 'bc', 'def', 'ghij'],
          expected: [0, 1, 2, 3, 4],
        },
        {
          arr: ['angular', 'react', 'ember'],
          expected: [7, 5, 5],
        },
        {
          arr: [],
          expected: [],
        },
      ].forEach((data) => {
        const actual = tasks.getStringsLength(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'getAverage should return the average of all items in the specified array of numbers',
    () => {
      [
        {
          arr: [],
          expected: 0,
        },
        {
          arr: [1, 2, 3],
          expected: 2,
        },
        {
          arr: [-1, 1, -1, 1],
          expected: 0,
        },
        {
          arr: [1, 10, 100, 1000],
          expected: 277.75,
        },
        {
          arr: [2, 3, 3],
          expected: 2.67,
        },
      ].forEach((data) => {
        const actual = tasks.getAverage(data.arr);
        assert.strictEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'isSameLength should return true if all strings have the same length, false otherwise',
    () => {
      [
        {
          arr: ['potato', 'banana', 'cherry'],
          expected: true,
        },
        {
          arr: ['cat', 'dog', 'elephant'],
          expected: false,
        },
        {
          arr: ['cat'],
          expected: true,
        },
      ].forEach((data) => {
        const actual = tasks.isSameLength(data.arr);
        assert.strictEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'isValueEqualsIndex should return true if there are elements with value equal to their index, false otherwise',
    () => {
      [
        {
          arr: [0, 1, 2, 3, 4],
          expected: true,
        },
        {
          arr: [2, 1, 0, 4, 5],
          expected: true,
        },
        {
          arr: [10, 20, 30, 40, 50],
          expected: false,
        },
      ].forEach((data) => {
        const actual = tasks.isValueEqualsIndex(data.arr);
        assert.strictEqual(actual, data.expected);
      });
    }
  );

  it.optional('insertItem should insert an item at specified position', () => {
    [
      {
        arr: [1, 3, 4, 5],
        item: 2,
        index: 1,
        expected: [1, 2, 3, 4, 5],
      },
      {
        arr: [1, 'b', 'c'],
        item: 'x',
        index: 0,
        expected: ['x', 1, 'b', 'c'],
      },
    ].forEach((data) => {
      tasks.insertItem(data.arr, data.item, data.index);
      assert.deepEqual(data.arr, data.expected);
    });
  });

  it.optional(
    'getHead should return the n first items from the specified array',
    () => {
      [
        {
          arr: [1, 2, 3, 4, 5],
          n: 2,
          expected: [1, 2],
        },
        {
          arr: ['a', 'b', 'c', 'd'],
          n: 3,
          expected: ['a', 'b', 'c'],
        },
        {
          arr: ['c', 'a', 't'],
          n: 0,
          expected: [],
        },
      ].forEach((data) => {
        assert.deepEqual(tasks.getHead(data.arr, data.n), data.expected);
      });
    }
  );

  it.optional(
    'getTail should return the n last items from the specified array',
    () => {
      [
        {
          arr: [1, 2, 3, 4, 5],
          n: 2,
          expected: [4, 5],
        },
        {
          arr: ['a', 'b', 'c', 'd'],
          n: 3,
          expected: ['b', 'c', 'd'],
        },
        {
          arr: ['c', 'a', 't'],
          n: 0,
          expected: [],
        },
      ].forEach((data) => {
        assert.deepEqual(tasks.getTail(data.arr, data.n), data.expected);
      });
    }
  );

  it.optional('doubleArray should return the specified array twice', () => {
    [
      {
        arr: ['Ace', 10, true],
        expected: ['Ace', 10, true, 'Ace', 10, true],
      },
      {
        arr: [0, 1, 2, 3, 4, 5],
        expected: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5],
      },
      {
        arr: [],
        expected: [],
      },
    ].forEach((data) => {
      const actual = tasks.doubleArray(data.arr);
      assert.deepEqual(
        actual,
        data.expected,
        `The result of doubling [${data.arr}] is not correct`
      );
    });
  });

  it.optional(
    'toStringList should return the string list of passed arguments',
    () => {
      [
        {
          arr: [0, false, 'cat', NaN, true, ''],
          expected: '0,false,cat,NaN,true,',
        },
        {
          arr: [1, 2, 3, 4, 5],
          expected: '1,2,3,4,5',
        },
        {
          arr: ['rock', 'paper', 'scissors'],
          expected: 'rock,paper,scissors',
        },
      ].forEach((data) => {
        const actual = tasks.toStringList(data.arr);
        assert.equal(actual, data.expected);
      });
    }
  );

  it.optional(
    'distinct should return an array of unique items from the specified array',
    () => {
      [
        {
          arr: [1, 2, 3, 3, 2, 1],
          expected: [1, 2, 3],
        },
        {
          arr: ['a', 'a', 'a', 'a', 'a'],
          expected: ['a'],
        },
        {
          arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          arr: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
          expected: [1, 2, 3, 4, 5, 6],
        },
      ].forEach((data) => {
        const actual = tasks.distinct(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'createNDimensionalArray should return an n-dimensional array filled with zeros',
    () => {
      [
        {
          n: 2,
          size: 3,
          expected: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        },
        {
          n: 3,
          size: 2,
          expected: [
            [
              [0, 0],
              [0, 0],
            ],
            [
              [0, 0],
              [0, 0],
            ],
          ],
        },
        {
          n: 4,
          size: 2,
          expected: [
            [
              [
                [0, 0],
                [0, 0],
              ],
              [
                [0, 0],
                [0, 0],
              ],
            ],
            [
              [
                [0, 0],
                [0, 0],
              ],
              [
                [0, 0],
                [0, 0],
              ],
            ],
          ],
        },
        {
          n: 1,
          size: 1,
          expected: [0],
        },
      ].forEach((data) => {
        const actual = tasks.createNDimensionalArray(data.n, data.size);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional('flattenArray should return a single-level array', () => {
    [
      {
        arr: [1, [2, [3, 4], 5], 6],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        arr: ['a', ['b', ['c', 'd'], 'e'], 'f'],
        expected: ['a', 'b', 'c', 'd', 'e', 'f'],
      },
      {
        arr: [1, 2, 3, 4],
        expected: [1, 2, 3, 4],
      },
    ].forEach((data) => {
      const actual = tasks.flattenArray(data.arr);
      assert.deepEqual(actual, data.expected);
    });
  });

  it.optional(
    'selectMany should return an array of child items from the specified array',
    () => {
      [
        {
          arr: [
            [1, 2],
            [3, 4],
            [5, 6],
          ],
          childrenSelector: (x) => x,
          expected: [1, 2, 3, 4, 5, 6],
        },
        {
          arr: [
            [11, 12, 13, 14, 15],
            [21, 22, undefined, 23, 24, 25],
            [31, 32, 34, 35],
          ],
          childrenSelector: (x) => x.slice(0, 2),
          expected: [11, 12, 21, 22, 31, 32],
        },
        {
          arr: ['one', 'two', 'three'],
          childrenSelector: (x) => x.split(''),
          expected: ['o', 'n', 'e', 't', 'w', 'o', 't', 'h', 'r', 'e', 'e'],
        },
      ].forEach((data) => {
        const actual = tasks.selectMany(data.arr, data.childrenSelector);
        assert.deepStrictEqual(actual, data.expected);
      });
    }
  );

  it.optional('calculateBalance should return the final balance', () => {
    [
      {
        arr: [
          [10, 8],
          [5, 1],
        ],
        expected: 6,
      },
      {
        arr: [
          [10, 8],
          [1, 5],
        ],
        expected: -2,
      },
    ].forEach((data) => {
      const actual = tasks.calculateBalance(data.arr);
      assert.strictEqual(actual, data.expected);
    });
  });

  // createChunks
  it.optional('createChunks should return an array of chunks', () => {
    [
      {
        arr: [1, 2, 3, 4, 5, 6, 7],
        chunkSize: 3,
        expected: [[1, 2, 3], [4, 5, 6], [7]],
      },
      {
        arr: ['a', 'b', 'c', 'd', 'e'],
        chunkSize: 2,
        expected: [['a', 'b'], ['c', 'd'], ['e']],
      },
      {
        arr: [10, 20, 30, 40, 50],
        chunkSize: 1,
        expected: [[10], [20], [30], [40], [50]],
      },
    ].forEach((data) => {
      const actual = tasks.createChunks(data.arr, data.chunkSize);
      assert.deepEqual(actual, data.expected);
    });
  });

  it.optional(
    'generateOdds should return the array of odd numbers of specified size',
    () => {
      [
        {
          len: 1,
          expected: [1],
        },
        {
          len: 2,
          expected: [1, 3],
        },
        {
          len: 5,
          expected: [1, 3, 5, 7, 9],
        },
        {
          len: 16,
          expected: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
        },
      ].forEach((data) => {
        assert.deepEqual(tasks.generateOdds(data.len), data.expected);
      });
    }
  );

  it.optional(
    'getElementByIndices should return an element from array by specified indexes',
    () => {
      [
        {
          arr: [
            [1, 2],
            [3, 4],
            [5, 6],
          ],
          indexes: [0, 0],
          expected: 1,
        },
        {
          arr: ['one', 'two', 'three'],
          indexes: [2],
          expected: 'three',
        },
        {
          arr: [[[1, 2, 3]]],
          indexes: [0, 0, 1],
          expected: 2,
        },
      ].forEach((data) => {
        const actual = tasks.getElementByIndices(data.arr, data.indexes);
        assert.equal(
          actual,
          data.expected,
          `getElementByIndices(${JSON.stringify(data.arr)}, ${JSON.stringify(
            data.indexes
          )}) returns an incorrect result. Expected ${
            data.expected
          }, but actual ${actual}`
        );
      });
    }
  );

  it.optional(
    'getFalsyValuesCount should return the number of falsy value in the specified array',
    () => {
      [
        {
          arr: [],
          expected: 0,
        },
        {
          arr: [1, '', 3],
          expected: 1,
        },
        {
          arr: [-1, 'false', null, 0],
          expected: 2,
        },
        {
          arr: [null, undefined, NaN, false, 0, ''],
          expected: 6,
        },
      ].forEach((data) => {
        const actual = tasks.getFalsyValuesCount(data.arr);
        assert.deepEqual(
          actual,
          data.expected,
          `Test failed for [${data.arr}]`
        );
      });
    }
  );

  it.optional(
    'getIdentityMatrix should return the identity matrix of the specified size',
    () => {
      [
        {
          n: 1,
          expected: [[1]],
        },
        {
          n: 2,
          expected: [
            [1, 0],
            [0, 1],
          ],
        },
        {
          n: 5,
          expected: [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1],
          ],
        },
      ].forEach((data) => {
        const actual = tasks.getIdentityMatrix(data.n);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'getIndicesOfOddNumbers should return an array containing indices of odd elements',
    () => {
      [
        {
          arr: [1, 2, 3, 4, 5],
          expected: [0, 2, 4],
        },
        {
          arr: [2, 4, 6, 8, 10],
          expected: [],
        },
        {
          arr: [11, 22, 33, 44, 55],
          expected: [0, 2, 4],
        },
      ].forEach((data) => {
        const actual = tasks.getIndicesOfOddNumbers(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  // getHexRGBValues
  it.optional(
    'getHexRGBValues should return an array of RGB Hex strings',
    () => {
      [
        {
          arr: [0, 255, 16777215],
          expected: ['#000000', '#0000FF', '#FFFFFF'],
        },
        {
          arr: [],
          expected: [],
        },
      ].forEach((data) => {
        const actual = tasks.getHexRGBValues(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional('getMaxItems should return n largest values', () => {
    [
      {
        arr: [],
        n: 5,
        expected: [],
      },
      {
        arr: [1, 2],
        n: 1,
        expected: [2],
      },
      {
        arr: [2, 3, 1],
        n: 2,
        expected: [3, 2],
      },
      {
        arr: [10, 2, 7, 5, 3, -5],
        n: 3,
        expected: [10, 7, 5],
      },
      {
        arr: [10, 10, 10, 10],
        n: 3,
        expected: [10, 10, 10],
      },
    ].forEach((data) => {
      const actual = tasks.getMaxItems(data.arr, data.n);
      assert.deepEqual(actual, data.expected);
    });
  });

  // findCommonElements
  it.optional(
    'findCommonElements should return an array containing common elements',
    () => {
      [
        {
          arr1: [1, 2, 3],
          arr2: [2, 3, 4],
          expected: [2, 3],
        },
        {
          arr1: ['a', 'b', 'c'],
          arr2: ['b', 'c', 'd'],
          expected: ['b', 'c'],
        },
        {
          arr1: [1, 2, 3],
          arr2: ['a', 'b', 'c'],
          expected: [],
        },
      ].forEach((data) => {
        const actual = tasks.findCommonElements(data.arr1, data.arr2);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  // findLongestIncreasingSubsequence
  it.optional(
    'findLongestIncreasingSubsequence should return a length of the longest increasing subsequence',
    () => {
      [
        {
          arr: [10, 22, 9, 33, 21, 50, 41, 60, 80],
          expected: 3,
        },
        {
          arr: [3, 10, 2, 1, 20],
          expected: 2,
        },
        {
          arr: [50, 3, 10, 7, 40, 80],
          expected: 3,
        },
        {
          arr: [41, 60, 80, 10, 22, 9, 33, 21, 50],
          expected: 3,
        },
      ].forEach((data) => {
        const actual = tasks.findLongestIncreasingSubsequence(data.arr);
        assert.strictEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'propagateItemsByPositionIndex should propagate every item its position time',
    () => {
      [
        {
          arr: [],
          expected: [],
        },
        {
          arr: [1],
          expected: [1],
        },
        {
          arr: ['a', 'b'],
          expected: ['a', 'b', 'b'],
        },
        {
          arr: ['a', 'b', 'c', null],
          expected: ['a', 'b', 'b', 'c', 'c', 'c', null, null, null, null],
        },
        {
          arr: [1, 2, 3, 4, 5],
          expected: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
        },
      ].forEach((data) => {
        const actual = tasks.propagateItemsByPositionIndex(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  // shiftArray
  it.optional('shiftArray should return the shifted array', () => {
    [
      {
        arr: [1, 2, 3, 4, 5],
        n: 2,
        expected: [4, 5, 1, 2, 3],
      },
      {
        arr: ['a', 'b', 'c', 'd'],
        n: -1,
        expected: ['b', 'c', 'd', 'a'],
      },
      {
        arr: [10, 20, 30, 40, 50],
        n: -3,
        expected: [40, 50, 10, 20, 30],
      },
    ].forEach((data) => {
      const actual = tasks.shiftArray(data.arr, data.n);
      assert.deepEqual(actual, data.expected);
    });
  });

  it.optional(
    'sortDigitNamesByNumericOrder should sort digit names by its numeric value',
    () => {
      [
        {
          arr: [],
          expected: [],
        },
        {
          arr: ['nine', 'one'],
          expected: ['one', 'nine'],
        },
        {
          arr: ['one', 'two', 'three'],
          expected: ['one', 'two', 'three'],
        },
        {
          arr: ['nine', 'eight', 'nine', 'eight'],
          expected: ['eight', 'eight', 'nine', 'nine'],
        },
        {
          arr: ['one', 'one', 'one', 'zero'],
          expected: ['zero', 'one', 'one', 'one'],
        },
        {
          arr: [
            'nine',
            'eight',
            'seven',
            'six',
            'five',
            'four',
            'three',
            'two',
            'one',
            'zero',
          ],
          expected: [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
          ],
        },
      ].forEach((data) => {
        const actual = tasks.sortDigitNamesByNumericOrder(data.arr);
        assert.deepEqual(actual, data.expected);
      });
    }
  );

  it.optional(
    'swapHeadAndTail should swap the head and tail of the array',
    () => {
      [
        {
          arr: [1],
          expected: [1],
        },
        {
          arr: [1, 2],
          expected: [2, 1],
        },
        {
          arr: [1, 2, 3],
          expected: [3, 2, 1],
        },
        {
          arr: [1, 2, 3, 4],
          expected: [3, 4, 1, 2],
        },
        {
          arr: [1, 2, 3, 4, 5],
          expected: [4, 5, 3, 1, 2],
        },
      ].forEach((data) => {
        const actual = tasks.swapHeadAndTail(Array.from(data.arr));
        assert.deepEqual(
          actual,
          data.expected,
          `The result of swapping head and tail [${data.arr}] is not correct`
        );
      });
    }
  );

  it.optional(
    'Functions from 04-array-test.js should not use basic loops statements',
    () => {
      Object.getOwnPropertyNames(tasks)
        .filter((x) => tasks[x] instanceof Function)
        .forEach((f) => {
          assert(
            !/([;{]\s*(for|while)\s*\()|(\.forEach\s*\()/.test(
              tasks[f].toString()
            ),
            `Function "${f}" should not use basic loop statements (for, while or forEach)! Please use specialized array methods (map, reduce etc).`
          );
        });
    }
  );
});

describe('strings-tasks optimal implementation', () => {
  it.optional('optimal implementation of getIntervalArray', function test() {
    const fnStr = tasks.getIntervalArray.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('from'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of findElement', function test() {
    const fnStr = tasks.findElement.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('indexOf'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of removeFalsyValues', function test() {
    const fnStr = tasks.removeFalsyValues.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('filter'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of getStringsLength', function test() {
    const fnStr = tasks.getStringsLength.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('map'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of getAverage', function test() {
    const fnStr = tasks.getAverage.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('reduce'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of isSameLength', function test() {
    const fnStr = tasks.isSameLength.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('every'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of isValueEqualsIndex', function test() {
    const fnStr = tasks.isValueEqualsIndex.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('some'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of insertItem', function test() {
    const fnStr = tasks.insertItem.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('splice'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of getHead', function test() {
    const fnStr = tasks.getHead.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('slice'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of doubleArray', function test() {
    const fnStr = tasks.doubleArray.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('concat'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of toStringList', function test() {
    const fnStr = tasks.toStringList.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('join'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of distinct', function test() {
    const fnStr = tasks.distinct.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('Set'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional(
    'optimal implementation of createNDimensionalArray',
    function test() {
      const fnStr = tasks.createNDimensionalArray.toString();
      if (!fnStr.includes('return')) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('fill'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
      );
    }
  );

  it.optional('optimal implementation of flattenArray', function test() {
    let fnStr = tasks.flattenArray.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('flat'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });

  it.optional('optimal implementation of selectMany', function test() {
    const fnStr = tasks.selectMany.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('flatMap'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    );
  });
});
