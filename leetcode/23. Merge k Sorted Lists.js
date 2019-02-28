/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    lists = lists.filter(i => i);
    if(!lists.length) return null;

    let min = Infinity, minIndex = -1, head = new ListNode('a');
    let newNode = head;
    while(lists.length) {
        for(let i = lists.length - 1; i > -1; i--) {
            if(lists[i].val < min) {
                min = lists[i].val;
                minIndex = i;  
            }
        }
        if(newNode.val === 'a') {
            newNode.val = min;
        } else {
            newNode.next = new ListNode(min);
            newNode = newNode.next;
        }
        if(lists[minIndex].next) lists[minIndex] = lists[minIndex].next;
        else lists.splice(minIndex, 1);

        min = Infinity;
        minIndex = -1;
    }
    console.log(head);
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function creatList(arr) {
    if(!arr.length) return null;
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

// mergeKLists([
//     creatList([1,4,5]),
//     creatList([1,3,4]),
//     creatList([2,6])
// ])

mergeKLists([
    creatList([]),
    creatList([]),
])