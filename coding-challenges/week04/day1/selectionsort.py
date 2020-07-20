def selectionsort(a):
    n=len(a)
    for i in range(0,n):
        min=i
        for j in range(i+1,n):
            if(a[min]>a[j]):
                min=j
        a[i],a[min]=a[min],a[i]
if __name__ == "__main__":
    b=[9,3,5,2,6,0.25,4]
    selectionsort(b)
    print(b)