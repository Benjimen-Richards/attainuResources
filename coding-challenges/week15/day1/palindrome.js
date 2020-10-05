//Write a function to check whether a string is a palindrome.
//Note: A palindrome is a word that is the same when read backwards. e.g. kayak, madam, malayalam
var name='madam'
function Pallindrome(name)
{
    Reversed_string=name.split('').reverse().join('')
    if (Reversed_string==name)
        {
            console.log('Given name is a palindrome')
        }
    else
    {
        console.log('Given name is not a palindrome ')
    }

}
Pallindrome(name)