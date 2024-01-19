/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let rootNode = new ListNode(0, null);
    let node = rootNode;
    let advance = 0;
    while (node || advance) {
      const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + advance;
      if (sum >= 10) {
        advance = 1;
        node.val = sum - 10;
      } else {
        advance = 0;
        node.val = sum;
      }
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      if (l1 || l2 || advance) {
        node.next = new ListNode();
      } else {
        node.next = null;
      }
      node = node.next;
    }
    return rootNode;
};
// @lc code=end
