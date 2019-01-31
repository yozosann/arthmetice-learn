// 每次1或2步，走到10阶梯的走法 O(2^n)

function floor(n) {
    if(n < 1) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return floor(n - 1) + floor(n - 2);
}

console.log(floor(10));