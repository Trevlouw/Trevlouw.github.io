var game = {
  score: 0,
  spc: 1,
  money: 0,

  btoolscost: 10,
  btoolbuys: 0,

  sp: 1,

  friends: 0,
  marketers: 0
}

function increasescore() {
  game.score += game.spc;
  document.getElementById("score").innerHTML = game.score;
}

function sellscore() {
  if (game.score >= (100 * game.sp)) {
    game.score -= 100 * game.sp;
    game.money += 5 * game.sp;
    document.getElementById("money").innerHTML = game.money;
    document.getElementById("score").innerHTML = game.score;
  }
}

function buybtools() {
  if (game.money >= game.btoolscost) {
    game.btoolbuys += 1;
    game.money -= game.btoolscost
    game.spc += 1;
    if (game.btoolbuys == 10) {
      game.btoolbuys = 0;
      game.btoolscost += 5
      document.getElementById("btoolscost").innerHTML = game.btoolscost;
    }
    document.getElementById("money").innerHTML = game.money;
  }
}

function buysp() {
  if (game.money >= 50) {
    game.money -= 50
    game.sp += 1;
    document.getElementById("money").innerHTML = game.money;
  }
}

function buyfriend() {
  if (game.money >= 50) {
    game.money -= 50
    game.friends += 1;
    document.getElementById("money").innerHTML = game.money;
  }
}

function buymarketer() {
  if (game.money >= 50) {
    game.money -= 50
    game.marketers += 1;
    document.getElementById("money").innerHTML = game.money;
  }
}

function save() {
  localStorage.setItem('save', JSON.stringify(game));
}

function load() {
  game = JSON.parse(localStorage.getItem("save"))
}

window.setInterval(function(){
  game.score += (game.friends)
  if (game.score >= (game.marketers * 100)) {
    game.score -= 100 * game.marketers;
    game.money += 5 * game.marketers;
  }
  document.getElementById("score").innerHTML = game.score;
  document.getElementById("money").innerHTML = game.money;
}, 200);
