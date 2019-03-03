/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return null;
    let cur = head,
        i = 0;
    head = new ListNode(-1);
    head.next = cur;
    cur = head;

    while(!(i % k) && cur) {
        let temp = [], j = 0, tempHead = cur;
        while(j < k && cur) {
            cur = cur.next;
            temp[j] = cur;
            j++;
            i++;
        }
        if(temp.filter(i => i).length === k) {
            tempHead.next = temp[k-1];
            for(let m = 0; m < k; m++) {
                temp[m].next = m - 1 >= 0 ? temp[m - 1] : temp[k - 1].next;
            }
            cur = temp[0];
        }
    }

    console.log(head.next);
    return head.next;
};

reverseKGroup(creatList([1,2,3,4,5]),2);

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