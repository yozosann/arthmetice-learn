/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if(!head) return null;
    let cur = head,
        i = 0;
    head = new ListNode(-1);
    head.next = cur;
    cur = head;

    while (cur.next && cur.next.next) {
        if (!(i % 2)) {
            let node1 = cur.next;
            let node2 = cur.next.next;

            node1.next = node2.next;
            node2.next = node1;
            cur.next = node2;
        }

        cur = cur.next;
        i++;
    }

    console.log(head.next);
    return head.next;
};

swapPairs(creatList([1,2,3,4]))

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function creatList(arr) {
    if (!arr.length) return null;
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