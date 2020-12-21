//  Hash as backspace
//  Create a JavaScript program to decode hashes as backspaces and return the deleted string.
//  Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd" Your task is to process a string with "#" symbols.
//  (Note: ES6 is must)
//  Examples: "abc#d##c" ==> "ac" "abc##d######" ==> "" "#######" ==> "" "" ==> ""

const abc=()=>{
    ans = []
    const value = "abc#d##c"
    for (let i = 0; i < value.length; i++) {
        if (value[i] === '#') {
            if (ans) {
                ans.pop()
            }
        }
        else {
            ans.push(value[i])
        }
    }
    console.log(ans)
}
abc()