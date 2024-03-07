// Targeting Element to change its innerText with API Data
// const game_n = document.getElementById("game_name") // Targeting game name
// const team_1 = document.getElementById("team_n1") // Targeting Name of team-1
// const team_2 = document.getElementById("team_n2")  // Targeting Nanme for team-2
// const round = document.querySelector('.round_number') //Targeting number of rounds
// const score1 = document.querySelector("#score_A") //Targeting score of Team-1
// const score2 = document.querySelector("#score_B") //Targeting score of Team-2

// fetch("http://localhost/screenscore.php/currentscore").then(res => { // Fetching API
//     return res.json() //Conerting API data into JSON Format
// }).then(data => {
//     console.log(data)

//     game_n.innerText = data.game //Changing data Game-Name With API-Data
//     team_1.innerText = data.teamnameA  //Changing data Name With API-Data
//     team_2.innerText = data.teamnameB
//     round.innerText = data.round
//     score1.innerText = data.team_a
//     score2.innerText = data.team_b
//     console.log(data)
// })

var game = "";
var teamB = "";
var teamA = "";
var date = "";
var round = 1;
setInterval(function () {
fetch("https://ipsgwalior.org/scoreboard/screenscore.php/currentscore")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.teamnameA)

    // game_n.innerText = data.game
    // team_1.innerText = data.teamnameA
    // team_2.innerText = data.teamnameB
    // round.innerText = data.round
    // score1.innerText = data.team_a
    // score2.innerText = data.team_b

    teamA = data.teamnameA;
    teamB = data.teamnameB;
    date = data.gamedate;
    game = data.game;
    // round = data.round
    // prev_round = round

    // console.log(teamA)
    // console.log(teamB)
    // console.log(date)
    // console.log(game)
    // console.log(data)

    // console.log(data);

    url =
      "key_teamA=" +
      teamA +
      "&key_teamB=" +
      teamB +
      "&key_date=" +
      date +
      "&key_game=" +
      game;
    // console.log(url);

    if (data.round != round) {
      // fetch("https://ipsgwalior.org/scoreboard/screenscore.php/prescore?" + url)
      fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // var name = data.response_obj[0].teamnameA;
        // var name =  data.filter(item => item.id === '1');
        // console.table(data.response_obj[0].team_a);
        console.log(data[1].id);
      });
      round += 1;
    }
  });
}, 1000);

// var a = "kjdhfh";

// var url =
//   "key_teamA=" +
//   teamA +
//   "&key_teamB=" +
//   teamB +
//   "&key_date=" +
//   date +
//   "&key_game=" +
//   game;
// console.log(url);

// fetch("https://ipsgwalior.org/scoreboard/screenscore.php/prescore?")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data.teamnameA)
//     a = data.game;
//     // console.log(data)

//     // team_1.innerText = data.teamnameA
//     // team_2.innerText = data.teamnameB
//     // round.innerText = data.round
//     // score1.innerText = data.team_a
//     // score2.innerText = data.team_b
//     // console.log(data.game)
//   });
// // game_n.innerText = a

// // https://ipsgwalior.org/scoreboard/screenscore.php/prescore?key_teamA=IPS (CTM)&key_teamB=MLB&key_round=2&key_date=13/1/2024&key_game=BADMINTON
