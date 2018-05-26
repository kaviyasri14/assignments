function sums()
{
    for(
        var sum = 0, i = 1;
        i < 1000;
        !(i % 3 && i % 5) && (sum += i), i++
    );
alert(sum);
}
