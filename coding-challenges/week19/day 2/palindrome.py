if __name__ == "__main__":
    string = "A man, a plan, a canal: Panama"
    bad = [',' , ':' , ]
    for i in bad:
        string = string.replace(i," ")
    array = "".join(string.split()).lower()      
    str = []
    for i in array:
        str.append(i[::-1])
    str="".join(str[::-1])
    print('original string:',string)
    print('original string:',str)
    if str == array:
        print('yes')
    else:
        print('no')








    # for i in bad:
    #     string = string.replace(i,"") 
    # n = len(string)
    # str = string.split()
    # print("".join(str))
    # print("".join(str[::-1]))
    # # ans = solve(str)
    # # if ans :
    # #     print('yes')
    # # else:
    # #     print('no')
