async function Sleep(millis){
    return new Promise(function(resolve){
        setTimeout(resolve, millis);
    });
}

Sleep(2000).then(function(){
    console.log("I waited for 2 seconds");
}).catch(function(err){
    console.log("Error: " + err);
})
Sleep(1000).then(function(){
    console.log("I waited for 1 second");
}).catch(function(err){
    console.log("Error: " + err);
});