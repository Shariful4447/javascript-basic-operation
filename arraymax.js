var marks= [66, 98, 78, 58, 23, 98, 100];
var max=marks[0];
for(var i=0; i<marks.length;i++){
    var element=marks[i];
    if(element>max){
        max = element;
    }

}
console.log("highes marks is", max);
