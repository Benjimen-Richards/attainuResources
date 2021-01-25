# Using range and for loop, print all multiples of 5, 7, 11 from 1 to 1001


number_1 = 5
print(f'\nMultiples of {number_1}')
for i in range(1, 1001+1):
    print(i*number_1, end=' ')

number_2 = 7
print(f'\nMultiples of {number_2}')
for i in range(1, 1001+1):
    print(i*number_2, end=' ')

number_3 = 11
print(f'\nMultiples of {number_3}')
for i in range(1, 1001+1):
    print(i*number_3, end=' ')
