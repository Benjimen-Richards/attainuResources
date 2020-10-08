var string1='arnold'
var string2='arnald'

function HammingDistance(string1,string2){
    let str1=string1.split('');
    let str2=string2.split('');
    let i=0;
    let count=0;
    for(i=0;i<str1.length;i++){
        if (str1[i]!=str2[i])
        {
            count=count+1
        }
    }
    return count
}

console.log(HammingDistance(string1,string2))