function calculateTime(n) 
{
    let before = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++)
    {
        sum += 1;
    }
    let after = new Date();
    return after.getTime() - before.getTime();
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));