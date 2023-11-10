function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var numbers = [0];
    var temp = 1;
    
    for (var i = 0; i < n-1; i++) {
        numbers.push(numbers[i]+temp);
        temp = numbers[i];
    }
    
    //Return an array of fibonacci numbers starting from 0.
    return numbers;
    
//Do NOT change any of the code below 👇
}