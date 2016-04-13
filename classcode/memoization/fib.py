def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n <= 1:
        return 1
    return fib(n-1) + fib(n-2)
