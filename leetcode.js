```js
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
```
