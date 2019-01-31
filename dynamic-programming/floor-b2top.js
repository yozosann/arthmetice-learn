// 每次1或2步，走到10阶梯的走法 O(n) 空间1
function floor(n) {
    if(n < 1) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let a = 1, b = 2 , temp = 0;
    for(let i = 3; i <n+1; i++ ) {
        temp = a + b;
        a = b;
        b = temp;
    } 
    return temp;
}

console.log(floor(10));