# # // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
# I 1
# V 5
# X 10
# L 50
# C 100
# D 500
# M 1000
if __name__ == "__main__":
    roman = {1000: "M", 900: "CM", 500: "D", 400: "CD",
             100: "C", 90: "XC", 50: "L", 40: "XL",
             10: "X", 9: "IX", 5: "V", 4: "IV",
             1: "I"}
    res = ''
    num = 354
    for i in roman:
        while num//i:
            res += roman[i]
            num -= i
    print(res)
