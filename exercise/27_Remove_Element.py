def removeElement(nums: list[int], val: int) -> int:
    counter = 0
    i = 0
    while i < len(nums):
        if nums[i] == val:
            nums.remove(val)
            counter+=1
        else:
            i+=1
    return [counter, nums]

def removeElement(nums: list[int], val: int) -> int:
    counter = 0
    for i in range(len(nums) ):
        print(i)



print(removeElement([3,2,2,3], 3))
#print(removeElement([0,1,2,2,3,0,4,2], 2))
                