function febonaccirecursive(n){
if(n==0){
    return 0;

}
if(n==1){
    return 1;
}

else{
    return febonaccirecursive(n-1)+febonaccirecursive(n-2);
}

}
var result=febonaccirecursive(10);
console.log(result);