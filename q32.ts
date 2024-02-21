// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users :string[] = ["Henry","William","James","Micheal","Alexander"]

let new_users :string[] = ["Daneil","Jack","Henry","Thomas","James"]

for(let i = 0; i < new_users.length; i++){
    let new_username :string = new_users[i]

    if(current_users.includes(new_username)){
        console.log(`Sorry ${new_users[i]} is not available. Please choose a different username!`)
    } else{
       console.log(`${new_users} is available!`)
       
       current_users.push(new_username);
    }

    }

