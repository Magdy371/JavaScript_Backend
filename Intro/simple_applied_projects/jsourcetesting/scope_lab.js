//Global Scope
var globalVar = "I am global var";
let globalLet = "I am global Let";
const globalConst = "I am a global Const";

//Block Scope
{
    var blockVar = "I am Block var";
    let blockLet = "I am global Let";
    const blockConst = "I am a global Const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst)
//Block Scope
console.log(blockVar);
console.log(blockLet);
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError