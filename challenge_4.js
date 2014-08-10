/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the 
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
exports.largestPalindromeProduct = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;  //largest value stored here


  // do your work here
  for (x = 100; x <= 999; x++){
    // NOTE: Y = X so that we don't have duplicates
    for (y = x; y <= 999; y++){
      var product = x * y;

      //EX: 10000
      var numberToString = product.toString();

      //into array, split, EX [1,0,0,0,0]
      // var numberToString_ar = numberToString.split(""); 
      
      //reverse the string, EX [0,0,0,0,1]
      // var reverseofTheString = numberToString_ar.reverse();

      //compage numberToString_ar and reverseofTheString
      //rejoin into strings
      var numberToString_reverse = numberToString.split("").reverse().join("");

      //compare numberToString_ar == reversOfTheString_ar
      if (numberToString == numberToString_reverse){
        console.log(numberToString, "is a Palindrome");

        //Find the largest values Palindrome
        if(parseInt(numberToString) > palindromeNumber){
        palindromeNumber = parseInt(numberToString);
        factor_0 = x;
        factor_1 = y;
        };
      };
    };
  };

  
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

