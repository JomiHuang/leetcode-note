/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //遍历第一个数组
    //第一个数组的每个元素在第二个数组中找到
    //然后while(i === j) { temp.push(i); i++, j++ }
    //if temp.length > 1 return temp
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    const temp = [];
    for(let i = 0; i < nums1Length; i++) {
        for(let j =0; j< nums2Length; j++) {
           while(nums1[i] === nums2[j] && i < nums1Length && j < nums2Length) {
               temp.push(nums1[i]);
               i++;
               j++;
           }
           if(temp.length > 1 || temp.length === nums1Length) break;
        }
        if(temp.length) break;
        console.log(temp.length, nums1Length)
        temp.length = 0;
    }
    return temp;
};


//环形链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false;
    }
    let slow = head, fast = head.next;
    while(slow !== fast) {
        if(fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};


// 对称二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isMirror(tree1, tree2) {
    if((tree1 === null && tree2 === null)) return true;
    if(tree1 === null || tree2 === null) return false;
    return (tree1.val === tree2.val) &&
            isMirror(tree1.left, tree2.right) &&
            isMirror(tree1.right, tree2.left);
};

var isSymmetric = function(root) {
    if(root === null) return true;
   return isMirror(root.left, root.right);
};


## 按层次遍历二叉树

// TODO
