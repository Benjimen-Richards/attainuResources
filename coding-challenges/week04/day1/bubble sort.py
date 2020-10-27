def bubblesort(b):
    n=len(b)
    for i in range(0,n):
        for j in range(0,n-i-1):
            if(a[j]>a[j+1]):
                a[j],a[j+1]=a[j+1],a[j]
if __name__ == "__main__":
    a=[23,54,12,86,3,0.2,56,87,4,2,6]
    bubblesort(a)
    # a=[int(i) for i in a]
    print(a)
