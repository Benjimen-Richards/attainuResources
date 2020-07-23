#binary search is basically decrease its processing time by middle value
#which result in the time complexity of " logn "

def binarysearchiterative(s,t,l,r):
    while l<=r:
        mid=(l+r)//2
        if s[mid]==t:
            return True
        else:
            if s[mid]>t:
                r=mid-1
            elif s[mid]<t:
                l=mid+1
            else:
                return True
    return False
print(binarysearchiterative([1,2,3,4,5],1,0,4))