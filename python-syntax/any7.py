def any7(nums):
    """Are any of these numbers a 7? (True/False)"""
    cnt = 1
    yes_7 = False
    for i in nums:         
        cnt = cnt + 1
        if (i == 7):
            yes_7 = True
            return yes_7
        elif (yes_7 == False and cnt == len(nums)):
            return yes_7


print("Should be true", any7([1, 2, 7, 4, 5]))
print("should be false", any7([1, 2, 4, 5]))

