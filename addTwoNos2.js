
var addTwoNumbers = function(l1, l2) {
    // Reverse the linked lists
    let reversedL1 = reverseLinkedList(l1);
    let reversedL2 = reverseLinkedList(l2);

    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Traverse both reversed linked lists
    while (reversedL1 || reversedL2 || carry > 0) {
        let val1 = reversedL1 ? reversedL1.val : 0;
        let val2 = reversedL2 ? reversedL2.val : 0;

        // Calculate the sum and carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        // Create a new node with the current digit
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes in the reversed linked lists
        if (reversedL1) reversedL1 = reversedL1.next;
        if (reversedL2) reversedL2 = reversedL2.next;
    }

    // Reverse the result linked list before returning
    return reverseLinkedList(dummyHead.next);
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}
