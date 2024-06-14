const palindromes = function (word='') {
    word = word.replace(/[.\s!?,]/g, '').toLowerCase();
    let l = 0;
    let r = word.length - 1;

    while (l <= r) {
        if (word[l] !== word[r]) {
            return false;
        }
        l++;
        r--;        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
