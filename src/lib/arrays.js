const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => {
    return number.toString();
  });
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => {
    return string.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    const letters = string.split('');
    letters.reverse();
    return letters.join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(number => {
    return number % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const result = strings.filter(string => {
    let containsVowels = false;
    vowels.forEach(vowel => {
      if (string[0] === vowel) {
        containsVowels = true;
      }
    });
    return containsVowels;
  });
  return result;
};

const removeSpaces = string => {
  const letters = string.split(' ');
  return letters.join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((previous, current) => {
    return previous.charCodeAt(previous.length - 1) - current.charCodeAt(current.length - 1);
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
