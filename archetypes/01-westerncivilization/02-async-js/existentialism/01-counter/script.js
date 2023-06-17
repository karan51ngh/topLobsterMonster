var counter = 1;

function printCount()
{
    console.clear();
    console.log(counter);
    counter+=1;
}

setInterval(printCount,1000);