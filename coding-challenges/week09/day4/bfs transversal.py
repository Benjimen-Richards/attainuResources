'''Write a graph construction + BFS traversal code'''


def add_adjacent(u,v,graph):
    graph[u][v]=1


def bfs(x,n,graph):
    queue=[]
    visited=[False for _ in range(n)]
    print(visited)
    queue.append(x)
    while len(queue)>0:
        popped=queue.pop(0)
        print(popped)
        for i in range(n):
            if graph[popped][i]==1 and not visited[i]:
                visited[i]=True
                queue.append(i)
                


if __name__ == "__main__":
    n=5
    graph=[[ 0 for x in range(n)] for x in range(n)]
    add_adjacent(0,1,graph)
    add_adjacent(1,2,graph)
    add_adjacent(0,3,graph)
    add_adjacent(0,4,graph)
    bfs(0,n,graph)