//hands-on 4

//1.Write a program that takes an array as input from the user and find out the product of the elements.
const Find_Prod = (array, N) => 
{
     let result = 1;
        for (let i = 0; i < N; i++)
            result = result * array[i];
        return result;
};
 


//2.Write a program which takes an array as input from the user and find out the sum of the array elements.
const Find_Sum = (array, N) => 
{
  let result = 0;
        for (let i = 0; i < N; i++)
            result = result + array[i];
        return result; 

};


//3.You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.
const findCount = (N, K, Arr) => 
{
   let count=0;
    for(let i=0 ; i<N ; i++ ){
      if(Arr[i] === K){
         count+=1;
          } 
             }
              return count;  
};
 

//4.You are given an array A containing N integer elements, and your task is to return an array B(having a size equal to 2)
//, where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
const findEvenOdd = (N, Arr) => 
{
   let odd_sum= 0;
    let even_sum= 0;
    let B=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 === 0 ){
        even_sum+=Arr[i];
      }
      else{
        odd_sum+=Arr[i];
      }
    }
    B[0]=even_sum ;
    B[1]=odd_sum;
    return B;  
};
 


//5.Write a program which takes an array as input from the user and a number.Check whether the number is present or not.
const Find_Num = (array,N,M) => 
{
   for(var i=0; i<N ; i++){
    if(M === array[i]){
      return('YES') ;
    }
  }
  return('NO') ;
};
 

//6.You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing 
//the age of persons that are over 18 (18included).
const highAge = (N, Arr) => 
{
    const Arr1=[];
    for(var i=0; i<N ; i++){
        if(Arr[i] >= 18){
            Arr1.push(Arr[i]);
        }
    }
    return (Arr1);  
};
 


//7.You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
const Inc_Arr = (array,N) => 
{
  array.forEach(function(ele){
       console.log(ele + 1);
    })
};



//8.You are given an array A containing the maths marks of students in your class, and your task is to determine if all 
//the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.
//If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
const isAllPass = (N, Arr) => 
{
    let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"  
};
 
