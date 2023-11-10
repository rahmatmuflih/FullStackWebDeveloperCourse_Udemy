var guest_list = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guest = prompt("Input your name: ");
var check_valid = guest_list.includes(guest);
if(check_valid){
    alert("Welcome");
}
else{
    alert("You're not on this list");
}