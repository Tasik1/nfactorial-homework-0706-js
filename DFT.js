const TEAM_NAME = "Dalida Football Team"
let couch_name = "Jose Mour"

let player1 = "Ronaldo"
let player1_number = 7
let player1_goat = true
let player1_goals = null
let player1_pos //undefined

let team_history = {
    name: TEAM_NAME,
    date_of_found: 1878,
    origin: "England",
    "total-league-titles": 20
}

team_history.colour = "red"

delete team_history.colour

let key = "boots";
team_history[key] = "Nike";

const WOMEN_TEAM_NAME = "Dalida Rangers";
let division = "Women League 1"
let women_team = { WOMEN_TEAM_NAME, division };

team_history.chant = function () {
    console.log(`glory, glory ${this.name}`);
  };
team_history.chant();

console.log("origin" in team_history)

for(any in team_history){
  console.log(any)
}

let goalkeepers = ["David", "Dean"];

let defenders = ["Luke", "Harry", "Varane", "Dalot"];
console.log(defenders.length);

defenders.push("Victor");
console.log(defenders)

defenders.pop();
console.log(defenders);

defenders.unshift("Alex");
console.log(defenders)

defenders.shift();
console.log(defenders);

let wall = goalkeepers.concat(defenders);
console.log(wall);


let defendersMap = defenders.map((defenders) => `Defender ${defenders}`);
console.log(defendersMap);

let wallFilter = wall.filter((wall) => wall.charAt(0) == "D");
console.log(wallFilter);

const { team_name, year, ...tournaments } = {
  team_name: TEAM_NAME,
  year: 2022,
  League: "7 place",
  ChampionsLeague: "Losed to Atletico",
  Cups: "Better dont ask",
}
console.log(tournaments);

const league_winners = ["Man city", "Liverpool", "Chelsea"];
console.log(...league_winners);

let leftFlang = defenders.slice(0, 2);
console.log(leftFlang);


console.log(wall.length > 5);
console.log(wall.length == 3);
console.log(wall.length != 7);
console.log("2" > 1);
console.log("01" == 1);
console.log("01" === 1);
console.log("42" == 42);
console.log("42" === 42);
console.log(null == undefined);
console.log(null === undefined);

let winner = "Messi";
let dor = player1 == winner ? "Win!!!" : "Messi is better";
console.log(dor);

let goat;
let decade = goat ?? "Not in this decade";
console.log(decade);

let goat1 = player1;
if (goat1) {
  console.log("GOAT is " + goat1);
} else {
  console.log("Not in this decade");
}

goat = winner;
switch(goat){
  case player1:
    console.log("GOAT is " + goat);
    break;
  case "Messi":
    console.log("Is it joke?!");
}

let players_of_the_month = ["KDB", "Ronaldo", "Kante", "KDB", "Kane"];

let count = 0; 
for(let i = 0; i < players_of_the_month.length; i++){
  if(players_of_the_month[i] === "KDB"){
    count++;
  }
}
console.log(count);

let i = 0;
while(i < count){
  console.log("KDB the best");
  i++;
}

let j = 0;
do{
  console.log(`${j+1} month best: ${players_of_the_month[j]}`);
  j++
}while(j < players_of_the_month.length);

function countDefenders(){
  return defenders.length;
}
console.log(countDefenders());

let countWall = function () {
  return wall.length;
};
console.log(countWall());

let getTeamName = () => {
  return TEAM_NAME;
};
console.log(getTeamName());

export{countWall, getTeamName};

export{countWall as cW, getTeamName as gTN};