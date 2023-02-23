function brickcalculator(floorNumber){
     
    var costPerFloor=0;
    for(var i=1;i<=floorNumber;i++){
        
        
        
        if(i<=10){
            costPerFloor=costPerFloor+15;
           /* var totalCostingForFirstgroup =costPerFloor*1000;
            totalCosting=totalCostingForFirstgroup;*/
        }
        else if(i>=11 && i<=20){
            costPerFloor=costPerFloor+12;
            //var totalCostingForSecondGroup=costPerFloor*1000;
            //totalCosting=totalCostingForFirstgroup+totalCostingForSecondGroup;
        }
         else{
            costPerFloor=costPerFloor+10;
            //var totalCostingForThirdGroup=costPerFloor*1000;
            //totalCosting=totalCostingForFirstgroup+totalCostingForSecondGroup+totalCostingForThirdGroup;

        }
        
            
    }
   var totalCosting=costPerFloor*1000;
    return totalCosting;
    
}


//var result=brickcalculator(12);
console.log(brickcalculator(22));

