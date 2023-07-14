function isAnagram(str1, str2) 
{
    str1 = str1.trim();
    str2 = str2.trim();
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const alphabets = new Array(128).fill(0);    

    for ( let i = 0; i <str1.length; i++)
    {
        alphabets[(str1[i]).charCodeAt(0)] += 1;

    }

    for ( let i = 0; i <str2.length; i++)
    {
            alphabets[(str2[i]).charCodeAt(0)] -= 1;
    }
    
    for (let i = 0; i < alphabets.length; i++)
    {
        if(alphabets[i] != 0) 
        {
            return false;
        }
    }
    return true
}

// module.exports = isAnagram;
console.log(isAnagram("rail safety","fairy tales"));