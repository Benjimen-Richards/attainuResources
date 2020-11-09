from collections import deque


def solve(wordlist,beginWord,endWord):
    level = 1
    queue = deque([[beginWord,level]])
    while queue:
        currword ,currlevel = queue.popleft()
        if currword == endWord:
            return currlevel
        for i in range(len(currword)):
            for char in 'abcdefghijklmnopqrstuvwxyz':
                nextword = currword[:i] + str(char) + currword[i+1:]
                if nextword in wordList:
                    wordList.remove(nextword)
                    queue.append([nextword,currlevel+1])
    return len(queue)        
        


if __name__ == "__main__":
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
    print(solve(wordList,beginWord,endWord))


