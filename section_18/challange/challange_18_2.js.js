function HouseKeeper(name, age, yearsOfExperience, cleaningRepertiore) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertiore = cleaningRepertiore;
    this.clean = function (){
        alert("cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper("Hilda", 38, 12, ["Bathroom", "Lobby", "Bedroom"]);