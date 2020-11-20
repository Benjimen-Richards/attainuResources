if __name__ == "__main__":
    roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500,
             'M': 1000, 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
    string = 'XVI'
    n = len(string)
    num = 0

    i = 0
    while i < n:
        if i+1 < n and string[i:i+2] in roman:
            num += roman[string[i:i+2]]
            i += 2
        else:
            num += roman[string[i]]
            i += 1
    print(num)
