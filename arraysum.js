
function getArraySum(number){
    var sum=0;
    for(var i=0; i<number.length;i++){
        var element=number[i];
        sum=sum+element;
    }
    return sum;
}
var number=[53, 45, 65, 78, 89];
var result= getArraySum(number);
console.log("the sum is", result);