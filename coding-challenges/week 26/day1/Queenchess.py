def checkBoard(board, row, col, n):
    # Check current row and col
    for i in range(n):
        if i != row:
            if board[i][col] == '1':
                return False
        if i != col:
            if board[row][i] == '1':
                return False
    # Check diagonals
    directions = [(-1, 1), (1, -1), (1, 1), (-1, -1)]
    for rowD, colD in directions:
        r, c = row, col
        while 0 <= r < n and 0 <= c < n:
            if r != row and c != col:
                if board[r][c] == '1':
                    return False
            r += rowD
            c += colD

    return True


def bt(row, board, ans, Queens):
    if row == Queens:
        ans.append([''.join(r) for r in board])
        return
    for i in range(Queens):
        board[row][i] = '1'
        if checkBoard(board, row, i, Queens):
            bt(row+1, board, ans, Queens)
        board[row][i] = '0'
    return ans


if __name__ == "__main__":
    Queens = 4
    board = [["0"] * Queens for _ in range(Queens)]
    ans = []
    a = bt(0, board, ans, Queens)
    st = []
    for i in a:
        for j in i:
            st.append(j)
    print(' '.join(st))
