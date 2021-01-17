module.exports = function reverse (n) {
    let reverseNumber = Math.abs(n).toString();
    reverseNumber = reverseNumber.split("").reverse().join("");
      
    return Number(reverseNumber);
};
