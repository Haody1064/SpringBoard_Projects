def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """
    WEEKDAY = { 1 : "Sunday", 2 : "Monday",  3 :"Tuesday", 4 : "Wednsday", 5 : "Thursday", 6 : "Friday", 7 : "Saturday"  }
    if (day_of_week in range(1,8,1)):
        return WEEKDAY[day_of_week]
    else:
        return None
    
    

weekday_name(2)
weekday_name(8)


