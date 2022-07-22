// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function mergeTwoLists(list1, list2) {
   list1.join()
   list2.join()
   Mlist=''
   Mlist+=list1+list2
   noCommas=Mlist.replaceAll(',','')
   split=noCommas.split('').sort((a, b) => a - b).map(Number)
    return (split)
};

console.log(mergeTwoLists([1,2,4],[1,2,3]))