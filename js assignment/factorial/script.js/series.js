function term(n)
{
     
    // Loop to add numbers
    let ans = 0;
    for(let i = 1; i <= n; i++)   
        ans =ans+ i*2;
     
    return ans;
}
console.log(term(5));