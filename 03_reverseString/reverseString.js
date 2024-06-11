const reverseString = function(s) {
    ans = '';
    for (let i = s.length-1; i >= 0; i--) {
        ans += s[i]
    }
    
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
