
function febonacci(n){
    var fibo=[0,1];
    for(i=2;i<=n;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    
    }
    return fibo;
}

var result=febonacci(10);
console.log(result);
