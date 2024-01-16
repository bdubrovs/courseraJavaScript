let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

//Use ternary operator for 
//isAuthenticated and authenticationStatus
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

//Practice
let userStatus = "Enrolled Member";
let dietaryServices = false;
let full = false;
let oneOnOne = false;

switch (userStatus) {
    case "Employee":
        dietaryServices = true;
        full = true;
        break;
    
    case "Enrolled Member":
        dietaryServices = true;
        oneOnOne = true;
        full = true;
        break;

    case "Subscriber":
        dieteryServices = true
        break;
}

console.log("You are entitled to: " +
  (full ? "Partial " : "") +
  (dietaryServices ? "Dietary Services," : "") +
  (oneOnOne ? " One-on-One interaction with a dietician" : "")
);