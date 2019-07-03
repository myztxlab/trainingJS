function tick()
{
    return 1 + 2;
}

function tick2()
{
    setTimeout(() => {
        console.log("Tick");
      }, 1000);
}

function tick3()
{
    return 190909090 + 2;
}

async function cobaAsync()
{
    try
    {
        name = await tick();
        console.log(name);
        name = await tick2();
        name = await tick3();
        console.log(name);
    } catch (error) {
        console.log(error);
    };
}

cobaAsync();
