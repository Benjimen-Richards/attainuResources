def longestCommonPrefix(wordlist):
    length = len(wordlist)
    str = ' '
    if not length:
        return wordlist
    if length == 1:
        return wordlist[0]

    for x in range(len(min(wordlist))):
        for y in range(1, length):
            if(wordlist[0][x] == wordlist[y][x]):
                if y == length-1:
                    str += wordlist[0][x]
            else:
                return str
    return str


if __name__ == "__main__":
    string = ["flower", "flow", "flight"]
    print(longestCommonPrefix(string))
    # Input: strs = ["flower","flow","flight"]
