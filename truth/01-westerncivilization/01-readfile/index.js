const fs = require('fs');

function sum(n)
{
    let sum = 0;
    for (let i = 1; i<= n; i++)
    {
        sum += i;
    }
    console.log(sum);
}

function fileIsRead(err,content)
{
    if(err)
        console.log('error');
    sum(content);
}

fs.readFile('contents.txt','utf-8',fileIsRead);
console.log('Hello Friend!');
sum(100);