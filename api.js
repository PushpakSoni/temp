// fetch("https://ipsgwalior.org/scoreboard/screenscore.php/prescore?key_teamA=a&key_teamB=b&key_date=29/2/2024&key_game=BADMINTON").then(res => {
//         return res.json()
//     }).then(data => {
//         console.log(data)
//     })

// var name = 's'

fetch(
  "http://localhost/screenscore.php/prescore?key_teamA=a&key_teamB=b&key_date=12/03/24&key_game=BADMINTON"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // var name = data.response_obj[0].teamnameA;
    var name =  data.response_obj.filter(item => item.round === '3');
    // console.table(data.response_obj[0].team_a);
    console.log(name);
  });