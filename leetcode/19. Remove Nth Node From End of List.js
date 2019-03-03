/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//     let r = [], cur = head, i = 0;
//     while(cur) {
//         r.push(cur);
//         cur = cur.next;
//         i++;
//     }
//     if(i === 1) return null;
//     if(i === n) return r[1];
//     r[i - n - 1].next = r[i - n + 1];
//     return head;
// };

var removeNthFromEnd = function (head, n) {
    let cur = head, i = 0, j = 1;
    while(cur) {
        cur = cur.next;
        i++;
    }
    if(i === 1) return null;
    if(i === n) return head.next;

    cur = head;
    while(cur) {
        if(j === i - n) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
        j++;
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function creatList(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    arr = arr.slice(1);

    arr.reduce((pre, cur) => {
        let temp = new ListNode(cur);
        pre.next = temp;
        return temp;
    }, cur)
    return head;
}

// console.log(creatList([1,2,3]));
console.log(removeNthFromEnd(creatList([1]), 1));