let userRole = "admin";
let accesslevel;
if(userRole === "admin"){
    accesslevel = "Full access granted";
}else if (userRole === "manager"){
    accesslevel = "limited access granted";
}else{
    accesslevel = "No access granted";
}

console.log(`Access Level : ${accesslevel}`);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome admin"
    }else{
        userMessage = "Welcome user";
    }
}else{
    userMessage = "Please log i to access the system";
}
console.log(`user Message : ${userMessage}`);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Adminstrator";
        break;
    case "manager":
        userCategory = "Manger";
        break;
    case "subscriber":
         userCategory = "Subcriber";
         break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);