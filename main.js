// formula:-factorial(n)=n∗factorial(n−1)

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else(n<-1)
      window.alert( `Only positive Integer Number`)
    
  }
n = prompt("Enter any value")

  answer = factorial(n)
  document.write(`<h2>Factorial of given number is  :  `   + + + n + " : " + answer)

