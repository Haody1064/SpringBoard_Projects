import string
from numpy import character


def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    r = ""
    if to_swap.isupper():
        for ltr in phrase:
            if (ltr == to_swap):
                ltr = ltr.lower()
                r += ltr
            elif (ltr == to_swap.lower()):
                ltr = ltr.upper()
                r += ltr
            else:
                r += ltr
    else:
        for ltr in phrase:
            if (ltr == to_swap):
                ltr = ltr.upper()
                r += ltr
            elif (ltr == to_swap.upper()):
                ltr = ltr.lower()
                r += ltr
            else:
                r += ltr
        
    