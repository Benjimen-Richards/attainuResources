#unique path

def unique_path(x,y):
    if x==1 or y==1:
        return 1
    return unique_path(x-1,y)+unique_path(x,y-1)
    
    
a=int(input("enter number of rows\n"))
b=int(input("enter number of columns\n"))
print("the number of paths are ",unique_path(a,b))