def longestprefix(wordlist):
    str = ''
    length = len(wordlist)
    if not length:
        return
    else:
        for x in range(len(min(wordlist))):
            for y in (1, length):
                if(wordlist[0][x] == wordlist[y][x]):
                    if(y == length-1):
                        str += wordlist[0][x]
    return str


if __name__ == "__main__":
    wordlist = ["flower", "flow", "flight"]
    print(longestprefix(wordlist))
