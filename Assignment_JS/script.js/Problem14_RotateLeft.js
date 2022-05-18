 //Initialize array   
 let  arr =  [1, 2, 3, 4, 5, 6, 7];   
 // number from rotation starts 
      let n = 3;  
       
          
        //Rotate the given array by n times toward left  
        for(let i = 0; i < n; i++){  
            let j, first;  
            //Stores the first element of the array  
            first = arr[0];  
          
            for(j = 0; j < arr.length-1; j++){  
                //Shift element of array by one  
                arr[j] = arr[j+1];  
            }  
            //First element of array will be added to the end  
            arr[j] = first;  
        }  
          
        
          
        //Displays resulting array after rotation  
        console.log("Array after left rotation");  
        for(let i = 0; i< arr.length; i++){  
            console.log(arr[i] + " ");  
        }  
     