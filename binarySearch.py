def binary_search(list, item):
    low = 0
    high = len(list) - 1
    print ("low: ", low, "high: ", high)

    while low <= high :
        mid = (low + high)
        print("mid: ", mid)
        guess = list[mid]
        print("guess: ", guess)
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


my_list = [1, 3, 5, 7, 9]
my_list1 = [1, 3, 5, 7, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

print(binary_search(my_list1, 16)) # => 1