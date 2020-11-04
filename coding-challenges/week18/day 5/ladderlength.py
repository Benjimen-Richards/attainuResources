# from collections import deque


# def solve(wordlist,beginWord,endWord):
#     level = 1
#     queue = deque([[beginWord,level]])
#     while queue:
#         currword , currlevel = queue.popleft() , 1
#         if currlevel == endWord:
#             return currlevel
#         for i in range(len(wordList)):
#             for char in 'abcdefghijklmnopqrstuvwxyz':
#                 nextword = currword[:i] + char + currword[i+1:]

#                 if nextword in wordList:
#                     wordList.remove(nextword)
#                     queue.append([nextword,currlevel+1])

# if __name__ == "__main__":
#     beginWord = "hit",
#     endWord = "cog",
#     wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
#     solve(wordList,beginWord,endWord)


class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        d = {}
        for word in wordList:
        	for i in range(len(word)):
        		s = word[:i] + "_" + word[i+1:]
        		if s in d:
        			d[s].append(word)
        		else:
        			d[s] = [word]
        print (d)
        queue, visited = [], set()
        queue.append((beginWord, 1))
        while queue:
        	word, steps = queue.pop(0)
        	if word not in visited:
        		visited.add(word)

        		if word == endWord:
        			return steps
        		else:
	        		for index in range(len(word)):
	        			s = word[:index] + "_" + word[index+1:]
	        			neigh_words = []
	        			if s in d:
	        				neigh_words = d[s]

	        			for neigh in neigh_words:
	        				if neigh not in visited:
	        					queue.append((neigh, steps+1))
        return 0

Solution().ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]  )