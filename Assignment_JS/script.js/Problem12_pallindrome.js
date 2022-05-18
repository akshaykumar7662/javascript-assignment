function palindrome(num){
    let count=0;
    for(let i=0;i<=num;i++){
      let n=i;
      let rev=0;
      
      while(n>0){
        let digit=n%10;
        rev=(rev*10) +digit;
        n=n/10;
      }
      if(rev==i){
          count++;
      }
      
    }
    
    console.log(count);
    
  }
  palindrome(5)
  
  