function buzz() {
    var i = 99; 
    var j = "";
    while (i >= 0) {
        j = "Take one down and pass it around, " + ((i-1) === 0? "no more" : i-1) + ((i-1) === 1? " bottle": " bottles") + " of beer on the wall.";
        if(i === 0){
            i = "No more";
            j = "Go to the store and buy some more, 99 bottles of beer on the wall.";
        } 

        console.log(i + (i === 1? " bottle": " bottles") +" of beer on the wall, " + (i === "No more"? "no more" : i) + (i === 1? " bottle": " bottles") + " of beer.\n" + j);
        i--;
    }
}