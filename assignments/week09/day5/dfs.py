#implementing dfs adjaceny list and matrix

def adjacency_list(u,v,graph,directed):
    graph[u][v]=1
    if directed:
        graph[v][u]=1


def dfs_adjacency_list(x,n,graph,visited):
    visited[x]=True
    print(x)
    for i in graph[x]:
        if not visited[i]:
            dfs_adjacency_list(i,x,graph,visited)
if __name__ == "__main__":
    n=5
    graph=[[0 for _ in range(n)] for _ in range(n)]
    adjacency_list(0,1,graph,True)
    adjacency_list(1,2,graph,True)
    adjacency_list(0,3,graph,True)
    adjacency_list(0,4,graph,True)
    visited=[False for x in range(n)]
    print('Adjaceny list')
    dfs_adjacency_list(0,n,graph,visited)

    


    
    


