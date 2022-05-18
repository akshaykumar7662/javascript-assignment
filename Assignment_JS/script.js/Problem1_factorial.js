let n=8

function fact(n){
  let ans =1;
  if(n== 0 || n==1){
    return ans ;
  }
  else {
    for (var i=n; i>=1; i--){
      ans=ans*i;
    }
  return ans;
}
}
ans=fact(n)
console.log(ans);