def longestCommonPrefix(strs):
    s = ""
    if len(strs) == 0:
        return s
    elif len(strs) == 1:
        return strs[0]

    for a in range(len(min(strs))):
        for b in range(1, len(strs)):
            if strs[0][a] == strs[b][a]:
                if b == len(strs)-1:
                    s += strs[0][a]
            else:
                return s
    return s


if __name__ == "__main__":
    string = ["flower", "flow", "flight"]
    print(longestCommonPrefix(string))
    # Input: strs = ["flower","flow","flight"]
