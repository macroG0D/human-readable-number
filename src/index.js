module.exports = function toReadable(number) {
  let numbArr = number.toString().split('');
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = [];

  // 0 - 19
  if (number < 20) {
    result.push(units[number]);
  }
  // 20 - 99
  else if (number < 100) {
    result.push(tens[numbArr[0] - 2]);
    if (units[numbArr[1]] !== 'zero') {
      result.push(units[numbArr[1]]);
    }
  }
  //21 - 999
  else if (number < 1000) {
    result.push(units[numbArr[0]]);
    result.push('hundred');
    numbArr.shift();

    // < * hundred 19 
    if (Number(numbArr.join('')) < 20) {
      let x = Number(numbArr.join(''));
      // if zero — dont add
      if (x !== 0) {
        result.push(units[x]);
      }
    }
    // > * hundred 19 
    if (tens[numbArr[0] - 2]) {
      result.push(tens[numbArr[0] - 2]);

      if (units[numbArr[1]] !== 'zero') {
        result.push(units[numbArr[1]]);
      }
    }
  }

  return result.join(' ');

};
