class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

    var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}