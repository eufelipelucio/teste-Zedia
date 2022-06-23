for(let num = 1; num <= 100; num++ )
{
    num % 3 == 0 && num % 5 == 0 ? console.log("Universo")
    :num % 3 == 0 ? console.log("Uni")
    :num % 5 == 0 ? console.log("Verso")
    :console.log(num);
}