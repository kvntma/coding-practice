//problem, it's difficult to figure out head and tail so let's skip head.
//replace pointers if val === currentNode.value
//else, traverse through normally.
//two pointers are always linked.

//check head if empty.
//if head is the value, skip to the next value and set that to head;

const removeElements = (head, val) => {
  if (!head) return null;
  let cur = head.next;
  let prev = head;
  while (cur) {
    if (cur.val === val) {
      cur = cur.next;
      prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  if (head.val === val) return head.next;
  return head;
};
