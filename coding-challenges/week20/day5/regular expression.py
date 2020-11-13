# Given an input string (s) and a pattern (p), implement regular expression matching with
# support for '.' and '*' where:
# • '.' Matches any single character.
# • '*' Matches zero or more of the preceding element.
# The matching should cover the entire input string (not partial).
# Example 1:
# Input: s = "aa", p = "a"
# Output: false
# Explanation: "a" does not match the entire string "aa".

import re


def match(str, p):
    ismatch = re.search(p, str)
    if ismatch.start() == 0 and ismatch.end() == len(str):
        return True
    else:
        return False


if __name__ == "__main__":
    string = "aab"
    p = "c*a*b"
    print(match(string, p))
