import time

def printArgs(f):
    def inner(*arg):
        print f.func_name + str(arg)
        return f(*arg)
    return inner

def timeFunc(f):
    def inner(*arg):
        t = time.time()
        output = f(*arg)
        print "Executed in " + str(time.time() - t) + " seconds"
        return output
    return inner

@timeFunc
@printArgs
def hello(*arg):
    time.sleep(1)
    return "hello world"

print hello(1, 2, 3)
