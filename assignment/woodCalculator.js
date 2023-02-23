function woodCalculator(chairNumber,tableNumber,khatNumber){
    var chairNumber=chairNumber * 1;
    var tableNumber=tableNumber * 3;
    var khatNumber =khatNumber * 5;
    var total = chairNumber+tableNumber+khatNumber;
    return total;


}
var totalWood=woodCalculator(12,2,9);
console.log("Total wood needed for Furniture is "+totalWood+" qbique feet.");

