function isPrime(n){
    for(i=2; i<n; i++){
        if (n%i == 0){
            return "not a prime number";
        }
        
    }
    return "prime number";

}
var result= isPrime(129);
console.log(result);