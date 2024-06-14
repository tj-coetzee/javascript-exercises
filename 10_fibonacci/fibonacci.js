const fibonacci = function(num) {
    num = parseInt(num);
    if (num === 0) { return 0; }
    else if (num === 1 ) { return 1; }
    else if (num < 0) {
        return 'OOPS';
    }

    let i = 1;
    let fib = [0, 1];
    while (i < num) {
        let temp = fib[i] + fib[i-1]; 
        fib.push(temp);
        i++;
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
