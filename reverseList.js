class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  var reverseList = function(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
  
    return prev;
  }
  
  
  