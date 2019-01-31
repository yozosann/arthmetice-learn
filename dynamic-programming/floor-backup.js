// 每次1或2步，走到10阶梯的走法 O(n) 
let cache = {};
function floor(n) {
    if(n < 1) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(cache[n]) return cache[n];
    else cache[n] = floor(n - 1) + floor(n - 2);
    return cache[n];
}

console.log(floor(10));