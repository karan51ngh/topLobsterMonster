
function isPalindrome(str) 
{
    str = str.toLowerCase();
    let str2 = str.split('').reverse().join('');

    let len = Math.floor(str.length/2);

    let j = str.length;
    for (let i = 0 ; i <= len; i++)
    {
        j -= 1;
        while(str[i] == ' ' || str[i] == ',' || str[i] == '?' || str[i] == '!' || str[i] == '.')
            i+=1;
        while(str[j] == ' ' || str[j] == ',' || str[j] == '?' || str[j] == '!' || str[j] == '.')
            j--;
        if(i >= j)
            break;
        if(str[i] != str[j])
            return false;
    }
    return true;
}

// module.exports = isPalindrome;

console.log(isPalindrome("zephyyhpez"));