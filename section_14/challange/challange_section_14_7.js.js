function lifeInWeeks(age) {

    var gap_age = 90 - age;
    var days = gap_age * 365;
    var weeks = gap_age * 52;
    var months = gap_age * 12;
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
}

lifeInWeeks(24);