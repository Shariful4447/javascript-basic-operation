function tinyFriend(name){
    
    var temp=name[0];
    for(var i=1; i<name.length; i++){
        var element=name[i];
        if(element.length<temp.length){
            temp=element;
        }
        return temp;
        

    }

}
var nameF=["shuvo", "par", "shahin", "akkas"];
console.log(tinyFriend(nameF));