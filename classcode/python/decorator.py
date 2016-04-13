import random

'''
A python decorator is merely shorthand for calling a wrapper-type
function like decorator.
A python decorator encapsulates a closure.
A decorator allows to temporarily wrap functionality
'''

def doubler(f):
    def inner():
        name = f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

#Without decorator
#print doubler(get_name)()
print get_name()
