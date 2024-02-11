class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var deleteMiddle = function(head) {
    if (!head || !head.next) {
        // If the list is empty or has only one node, return null
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // At this point, 'slow' is pointing to the middle node
    // 'prev' is pointing to the node before the middle node

    // Delete the middle node
    prev.next = slow.next;

    return head;
}



    