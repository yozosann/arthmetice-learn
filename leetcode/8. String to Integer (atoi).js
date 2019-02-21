/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let newStr = str.trim();
    
	let ans = (num) => isNaN(parseInt(num)) ? 0 : parseInt(num)>=Math.pow(2,31) ? Math.pow(2,31)-1 : parseInt(num)<=Math.pow(-2,31) ? Math.pow(-2,31) : parseInt(num);
    
	if((newStr.charAt(0)=="-" || newStr.charAt(0)=="+") && (newStr.charAt(1)=="-" || newStr.charAt(1)=="+")) return 0;
    
	else return ans(newStr);
};