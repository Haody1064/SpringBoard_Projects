from itertools import count

def freq_cnt(coll):
    count = {}
    for x in coll:
        count[x] = count.get(x,0) + 1

    return count

def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    
    return freq_cnt(str(num1)) == freq_cnt(str(num2))

