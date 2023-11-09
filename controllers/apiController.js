function convert(arabicNumber) {
  if (!isNaN(arabicNumber) && arabicNumber > 0 && arabicNumber < 4000) {
    const romanNumeral = convertToRoman(arabicNumber);
    return romanNumeral;
  } else {
    return "Invalid input. Please enter a valid Arabic number.";
  }
}

function invertConvert(romanNumber) {
  const arabicNumber = convertToArabic(romanNumber);
  if (arabicNumber !== null) {
    return arabicNumber;
  } else {
    return "Invalid input. Please enter a valid Roman numeral.";
  }
}

function convertToRoman(number) {
  if (number < 1 || number > 3999) {
    return "Invalid input. Please enter a valid Arabic number (1-3999).";
  }

  const romanNumerals = [
    ["", "M", "MM", "MMM"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];

  const thousands = romanNumerals[0][Math.floor(number / 1000)];
  const hundreds = romanNumerals[1][Math.floor((number % 1000) / 100)];
  const tens = romanNumerals[2][Math.floor((number % 100) / 10)];
  const ones = romanNumerals[3][number % 10];

  return thousands + hundreds + tens + ones;
}

function convertToArabic(romanNumber) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabicNumber = 0;
  let prevValue = 0;

  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const currentChar = romanNumber[i];
    const currentValue = romanNumerals[currentChar];

    if (currentValue >= prevValue) {
      arabicNumber += currentValue;
    } else {
      arabicNumber -= currentValue;
    }

    prevValue = currentValue;
  }

  if (convertToRoman(arabicNumber) === romanNumber) {
    return arabicNumber;
  } else {
    return null;
  }
}

module.exports = {
  convert,
  invertConvert,
};
