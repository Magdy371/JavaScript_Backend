const bckPack = {
    marks: "adidas",
    size:"med",
    vol:30,
    contain_led:true,
    ledOpen:false,
    //method
    toggleLed:function(ledStatus){
        this.ledOpen = ledStatus; 
    },
    strapLength:{
        right:26,
        left:26
    },
    //method
    newStrapLength:function(l,r){
        this.strapLength.left = l;
        this.strapLength.right = r;
    },
}

console.log(JSON.stringify(bckPack));
console.log("The backpack object:", bckPack);
console.log("------------------------------");
console.log("The backpack marks:", bckPack.marks);
console.log("------------------------------");
console.log("The backpack size:", bckPack.size);
console.log("------------------------------");
console.log("The backpack volume:", bckPack.vol);
console.log("------------------------------");
console.log("The backpack contain LED light:", bckPack.contain_led);
console.log("------------------------------");
console.log("The backpack LED light is open:", bckPack.ledOpen);
console.log("------------------------------");
bckPack.toggleLed(true);
console.log("The backpack LED light is open:", bckPack.ledOpen);
console.log("------------------------------");
console.log("The backpack strap length:", bckPack.strapLength);
console.log("------------------------------");
bckPack.newStrapLength(30,30);
console.log("------------------------------");
console.log("The backpack strap length:", bckPack.strapLength);
console.log("------------------------------");
let type = "marks";
console.log("The backpack marks:", bckPack[type]);