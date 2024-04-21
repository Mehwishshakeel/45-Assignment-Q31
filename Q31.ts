// creat an array
let userNames =["Arsalan","Maaz","Saad","Tahir","Admin"];

userNames = [];
if(userNames.length === 0){
      console.log("Your array is empty need to find some new users!!");
}
else{
    // using forEach loop on array
    userNames.forEach(oneUser => {
        if(oneUser=== "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${oneUser} ,thank you for logging in again`);
        }
    })
    
}

