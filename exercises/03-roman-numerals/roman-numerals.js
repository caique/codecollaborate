//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (number) => {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  let inRoman = "";

  for(let i = 0; i < decimalValue.length; i++) {
    while(number >= decimalValue[i]) {
      inRoman += romanNumeral[i];
      number -= decimalValue[i];
    }
  }

  return inRoman;
};
