from collections import deque


def solve(wordlist,beginWord,endWord):
    level = 1
    queue = deque([[beginWord,level]])
    while queue:
        currword , currlevel = queue.popleft() , 1
        if currlevel == endWord:
            return currlevel
        for i in range(len(wordList)):
            for char in 'abcdefghijklmnopqrstuvwxyz':
                nextword = currword[:i] + char + currword[i+1:]

                if nextword in wordList:
                    wordList.remove(nextword)
                    queue.append([nextword,currlevel+1])

if __name__ == "__main__":
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
    solve(wordList,beginWord,endWord)


