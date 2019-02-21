const goldInfo = [
    {g:400,p:5},
    {g:500,p:5},
    {g:200,p:3},
    {g:300,p:4},
    {g:350,p:3}
];

/**
 * 
 * @param {工人数} n 
 * @param {金矿数} w 
 * @param {金矿的开采信息} gold 
 */
function getMostGold(n, w, gold) {
    let preResults = [], results = [];

    // 得到第一层的结果
    for(let i = 0;i <= n;i++) {
        if(i < gold[0].p) {
            preResults[i] = 0;
        } else {
            preResults[i] = gold[0].g;
        }
    }

    // 依次往下推出表格 外层循环：金矿数量 内层循环：人的数量
    for(let i=1; i < w; i++) {
        for(let j=0; j<= n; j++) {
            if(j < gold[i].p) {
                results[j] = preResults[j];
            } else {
                results[j] = Math.max(preResults[j], preResults[j - gold[i].p] + gold[i].g);
            }
        }
        preResults = [...results];
    }
    return results[n];
}

console.log(getMostGold(10, 5, goldInfo));