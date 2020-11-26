# // Input: haystack = "hello", needle = "ll"
# // Output: 2
if __name__ == "__main__":
    haystack = "hello"
    needle = "ll"
    if needle in haystack:
        print(len(needle))
    else:
        print('-1')
