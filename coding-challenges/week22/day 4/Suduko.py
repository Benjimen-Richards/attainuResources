def isValidSudoku(board):
    rows = [set() for i in range(9)]
    columns = [set() for i in range(9)]
    BorderBox = [set() for i in range(9)]

    def boxNumber(row, col):
        return (row // 3) * 3 + col // 3

    for row in range(9):
        for col in range(9):
            # only care about filled cells
            char = board[row][col]
            if char != ".":
                if char not in rows[row]:
                    rows[row].add(char)
                else:
                    return False
                if char not in columns[col]:
                    columns[col].add(char)
                else:
                    return False
                boxIndex = boxNumber(row, col)
                if char not in BorderBox[boxIndex]:
                    BorderBox[boxIndex].add(char)
                else:
                    return False
    return True


if __name__ == "__main__":
    board = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
             ["6", ".", ".", "1", "9", "5", ".", ".", "."],
             [".", "9", "8", ".", ".", ".", ".", "6", "."],
             ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
             ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
             ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
             [".", "6", ".", ".", ".", ".", "2", "8", "."],
             [".", ".", ".", "4", "1", "9", ".", ".", "5"],
             [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

print(isValidSudoku(board))
