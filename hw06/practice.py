import random

def pt(n):
    triples = []
    for c in xrange(n):
        for b in xrange(c):
            for a in xrange(b):
                if a**2 + b**2 == c**2:
                    triples.append([a, b, c])
    return triples

def pt2(n):
    return [(a, b, c)
            for c in xrange(n)
            for b in xrange(c)
            for a in xrange(b)
            if a**2 + b**2 == c**2]

def quickSort(nums):
    if len(nums) <= 1:
        return nums
    pivot = random.randint(0, len(nums)-1)
    smaller = [x for x in nums if x < nums[pivot]]
    larger = [x for x in nums if x > nums[pivot]]
    equal = [x for x in nums if x == nums[pivot]]
    return quickSort(smaller) + equal + quickSort(larger)

