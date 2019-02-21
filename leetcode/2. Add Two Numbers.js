/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0), remainder = 0;
    let cur = head, next = head;

    while(l1 || l2) {
        let val1 = l1 && l1.val || 0, val2 = l2 && l2.val || 0;
        let temp = val1 + val2 + remainder;
        if(temp >= 10) {
            temp = temp - 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        next.val = temp;
        next.next = new ListNode(remainder);
        cur = next;
        next = next.next;
        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
    }

    if(cur.next.val === 0) {
        cur.next = null;
    }
    
    return head;
};

function getNode(arr) {
    let head = new ListNode(arr[0]);
    arr.slice(1).reduce((pre, cur) => {
        let curNode = new ListNode(cur);
        if(pre) pre.next = curNode;
        return curNode;
    }, head)

    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(addTwoNumbers(getNode([5]), getNode([5])));