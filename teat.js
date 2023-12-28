function group(array, keySelector, valueSelector) {
    const newMap = new Map();
    array.map((item) => {
      if (!newMap.has(keySelector(item))) {
        console.log('hello')
     newMap.set(keySelector(item), []);
      }
      const value = newMap.get(keySelector(item)).push(valueSelector(item));
      
      return newMap.set(
        keySelector(item),
        value
      );
    });
    return newMap;
  }

  console.log(group([
    { country: 'Belarus', city: 'Brest' },
    { country: 'Russia', city: 'Omsk' },
    { country: 'Russia', city: 'Samara' },
    { country: 'Belarus', city: 'Grodno' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland', city: 'Lodz' },
  ], (item) => item.country, (item) => item.city))