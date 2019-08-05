let game = {
	// score
  score: 0,
  	// score per click
  spc: 1,
  	// money
  money: 0,

	// buy tools
  btoolscost: 10,
  btoolbuys: 0,

	// store partnership
  sp: 1,

  friends: 0,
  marketers: 0,
  prestigepointbuys: 1,
  prestigepointcost: 100
}

function increasescore() {
  game.score += game.spc;
  document.getElementById("score").innerHTML = game.score;
}

function sellscore() {
  if (game.score >= 100 * game.sp) {
    game.score -= 100 * game.sp;
    game.money += 5 * game.sp * game.prestigepointbuys;
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
  localStorage.setItem("save", JSON.stringify(game));
}

function load() {
	game = JSON.parse(localStorage.getItem("save"))
}

function prestige() {
  console.log(game.money)
  console.log(game.prestigepointcost)
  if (game.money >= game.prestigepointcost) {
    game.prestigepointbuys++;
    game.money -= game.prestigepointcost
    game.prestigepointcost = game.prestigepointbuys * 100
    document.getElementById("prestigecost").innerHTML = game.prestigecost;
  }
  document.getElementById("money").innerHTML = game.money;
}

window.setInterval(function() {
  game.score += game.friends // && - AND || - OR
  if (game.score >= game.sp * 100 && game.marketers >= 1) {
    game.score -= 100 * game.sp;
    game.money += 5 * game.sp * game.prestigepointbuys;
  }
  document.getElementById("score").innerHTML = game.score;
  document.getElementById("money").innerHTML = game.money;
}, 200);
