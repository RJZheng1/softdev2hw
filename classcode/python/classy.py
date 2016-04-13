def make_counter():
    count = [0]

    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    return {'inc': inc,
            'dec': dec,
            'reset': reset,
            'get': get}

c1 = make_counter()
c2 = make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()
