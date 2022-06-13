//Hands-on 3 -

//1.Take a number from the user and print the count of digits in that number.
const Find_Digits = (N) => 
{
  let count = 0;
  if (N >= 1)
  ++count;

  while (N / 10 >= 1) {
    N /= 10;
    ++count;
  }
  return( count ) ;
};


//2.Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
const Find_Five = (N) => 
{
	var count=0
  var digit
  while(N!==0){
    digit = N % 10;
    N=parseInt(N/10)
    if(digit == 5){
      count=count+1;
    }
    
  }
  return count
};


//3.You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).
const findSum = (n) => {
    let C = 2, sum = 0;
    while(C <= n) {
        sum = sum + C;
        C += 2;
     }
     return(sum);
  };
  


//4.Write a program that takes a number from the user and get the sum of the digits present in the number.
const Number_Sum = (N) => 
{
	 let sum = 0;
    while (N !== 0) {
        sum = sum + N % 10;
        N = parseInt(N / 10);
    }
    return (sum);
};


//5.Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
const Print_Odd = (N) => 
{
  let i=2;
	for(i=2;i <= N ;i++){
	  if(i % 2 !== 0){
	  }
	}
	return(N);
};


//6.Write a program which ask user for no of lines and print a pattern using an asterik .
const Print_pattern = (N) => 
{
  let i,j;
 
  for(i=0;i<N;i++){
     let result=''
    for(j=0;j<=i;j++){
      result=result+'*'
    }
    console.log(result)
  
  }
};


//7.Write a program which takes  a number from user and check whether number is prime number or not a prime number.
const Prime_Check = (N) => {
    for (let i = 2; i < N; i++) {
        if (N % i !== 0) {
          return "YES";
        } else {
          return "NO";
        }
      }
    };


//8.You are given an integer N, and your task is to print all the integers starting from 1 till  (N inclusive).
const printNumbers = (n) => {
    var result=''
       let i=1;
       while(i<=n)
       {
         result=result+i+' '
         i++;
       }
       console.log(result)
   };

   

//9.Write a program which takes a number from user and print the table.
const Print_Table = (N) => {
    let  mithilesh = 0;
    for(i=1;i<=10;i++){
      mithilesh = (N+" * "+ i+ " = " + N*i);
      console.log(mithilesh);
    }
   };