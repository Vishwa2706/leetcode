class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to start the merged list
    const dummy = new ListNode(-1);
    let current = dummy;

    // Loop until one of the lists is exhausted
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one of the lists is not empty, append the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list starting from the dummy's next node
    return dummy.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList); // The head of the merged linked list
