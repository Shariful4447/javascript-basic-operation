var number=[3, 6, 2, 5, 6, 3, 8, 5];
var uniquename=[];
for (var i=0; i<number.length; i++){
    var element= number[i];
    var index=uniquename.indexOf(element);
    if(index==-1){
        uniquename.push(element);

    }
}
console.log(uniquename);