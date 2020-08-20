class heap:
    def __init__(self,array):
        self.array=array
    
    def prune_down(self,idx):
        if 2*idx+1>len(array)-1:
            return 

        left=2*idx+1
        right=2*idx+2
        max=idx
        if left<=len(self.array)-1 and self.array[max]<self.array[left]:
            max=left
        if right<=len(self.array)-1 and self.array[max]<self.array[right]:
            max=right

        if max!=idx:
            self.array[max],self.array[idx]=self.array[idx],self.array[max]
            self.prune_down(max)

    def build(self):
        idx=len(array)-1
        while idx>=0:
            self.prune_down(idx)
            idx-=1

        print('max heap build is :',self.array)

    def heap_sort(self):
        res=[]
        for i in range(len(array)):
            res.append(self.poping_element())
        return res
    def poping_element(self):
        max_idx=self.array[0]
        length=len(self.array)-1
        self.array[0],self.array[length]=self.array[length],self.array[0]
        self.array.pop()
        self.prune_down(0)
        return max_idx

    def kth_largest(self,arr,k):
        res=[]
        for i in range(k):
            res.append(arr[i])
        return res.pop()

        
    

if __name__ == "__main__":
    array=[56,85,25,78,68,97,46,856]
    print('initial array:',array)
    h=heap(array)
    h.build()
    arr=h.heap_sort()
    print('sorted heap:',arr)
    print('kth largest is :',h.kth_largest(arr,4))

    

