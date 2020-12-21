# Hash as backspace
# Create a JavaScript program to decode hashes as backspaces and return the deleted string.
# Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd" Your task is to process a string with "#" symbols.
# (Note: ES6 is must)
# Examples: "abc#d##c" ==> "ac" "abc##d######" ==> "" "#######" ==> "" "" ==> ""

if __name__ == "__main__":
    string = "abc#d##c"
    ans = []
    for i in string:
        if(i == '#'):
            if ans:
                ans.pop()
        else:
            ans.append(i)
    print(*ans)
