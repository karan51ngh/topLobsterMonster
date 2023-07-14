const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res)
{
    // res.send('Hello Friend!');
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum);
    var answwer = "the sum is "+ calculatedSum;
    res.send(answwer)
}

app.get('/', handleFirstRequest);

function started()
{
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

function calculateSum(counter)
{
    var sum = 0;
    for( let i=1; i <=counter; i++)
    {
        sum += i;
    }
    return sum;
}

