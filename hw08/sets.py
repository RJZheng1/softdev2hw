def union(a, b):
    return [x for x in a if x not in b] + b

def intersection(a, b):
    return [x for x in a if x in b]

def setDiff(a, b):
    return [x for x in a if x not in b]

def symmDiff(a, b):
    return [x for x in a if x not in b] + [x for x in b if x not in a]

def cartProd(a, b):
    return [(x, y) for x in a for y in b]
