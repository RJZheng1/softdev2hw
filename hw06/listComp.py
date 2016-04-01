NUMBERS = "0123456789"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NON_ALPHANUM = ".?!&#,;:-_*"

def isStrong(password):
    if len([1 for x in password if x in NUMBERS]) != 0:
        if len([1 for x in password if x in UC_LETTERS]) != 0:
            if len([1 for x in password if x in LC_LETTERS]) != 0:
                         return True
    return False

def howStrong(password):
    strength = 0
    if len([1 for x in password if x in NUMBERS]) != 0:
        strength += 3
    if len([1 for x in password if x in UC_LETTERS]) != 0:
        strength += 4
    if len([1 for x in password if x in LC_LETTERS]) != 0:
        strength += 4
    if len([1 for x in password if x in NON_ALPHANUM]) != 0:
        strength += 3
    return strength
