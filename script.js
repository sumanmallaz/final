let points = 0;
let life = 3;



let characterFX = document.querySelector("#characterFX");
let scoreFX = document.querySelector("#scoreFX");
let explosionFX = document.querySelector("#explosionFX");
let bgMusic = document.querySelector("#bgMusic");
let muteSoundContainer = document.querySelector("#mute_sound_container");
let muted = false;
let soundVolume = .15;


let timeBar = document.querySelector("#time_board");
let settingButton = document.querySelector("#settings_Button");
let sliderInput = document.querySelector("#sliderInput");
let volume = document.querySelector("#volume");



window.addEventListener("load", userStart);



function userStart() {
	document.querySelector("#gameover_screen").classList.add("hide");
	document.querySelector("#levelcomplete").classList.add("hide");

	document.querySelector("#start_screen").classList.remove("hide");
	document.querySelector(".start_button").classList.add("pulse");
	document.querySelector(".start_button").addEventListener("click", startGame);

}


function startGame() {
	document.querySelector("#gameover").classList.add("hide");
	document.querySelector("#levelcomplete").classList.add("hide");
	document.querySelector("#start_screen").classList.remove("hide");
	document.querySelector(".start_button").classList.add("hide");

	document.querySelector("#start_screen").classList.add("hide");
	settingButton.addEventListener("click", settings);
	start();

}
function start() {
	bgMusic.addEventListener("ended", playBgMusic);
	startFalling();
	playBgMusic();
	time();
}

function soundMute() {
	console.log("soundMute");
	if (bgMusic.muted == false) {
		bgMusic.muted = true;

	} else {
		bgMusic.muted = false;
		document.querySelector("#sound_button").classList.remove("soundstop");

	}
}



function settings() {
	console.log("settings");
	document.querySelector("#character").classList.add("pause");
	document.querySelector("#character1").classList.add("pause");

	document.querySelector("#bomb").classList.add("pause");

	document.querySelector("#bomb1").classList.add("pause");

	document.querySelector("#coin1").classList.add("pause");

	document.querySelector("#coin2").classList.add("pause");
	document.querySelector("#coin3").classList.add("pause");

	timeBar.querySelector("#time_board .sprite2").classList.add("pause");

	document.querySelector("#settingsScreen").style.visibility = "visible";


	document.querySelector("#sound_button").addEventListener("click", soundMute);
	document.querySelector("#sound_button").classList.add("pulse");

	document.querySelector("#musicFX").addEventListener("click", toggleMusicFX);

	document.querySelector("#musicFX").classList.add("pulse");

	document.querySelector("#close_button").addEventListener("click", closeSettings);




}

function toggleMusicFX() {
	console.log("toggleMusicFX");

	if (muted == false) {
		muted = true;
		document.querySelector("#musicFX").classList.add("soundstop");


	} else {
		muted = false;

		document.querySelector("#musicFX").classList.remove("soundstop");

	}
}

function closeSettings() {
	console.log("closeSettings");
	document.querySelector("#character").classList.remove("pause");
	document.querySelector("#character1").classList.remove("pause");

	document.querySelector("#bomb").classList.remove("pause");

	document.querySelector("#bomb1").classList.remove("pause");

	document.querySelector("#coin1").classList.remove("pause");

	document.querySelector("#coin2").classList.remove("pause");
	document.querySelector("#coin3").classList.remove("pause");

	timeBar.querySelector("#time_board .sprite2").classList.remove("pause");

	timeBar.querySelector("#time_board .sprite2").classList.remove("pause");

	document.querySelector("#settingsScreen").style.visibility = "hidden";


}

function playBgMusic() {
	bgMusic.play();
	bgMusic.volume = soundVolume;
}



function startFalling() {
	console.log("start falling");
	bgMusic.addEventListener("ended", playBgMusic);
	// startTimer();
	document.querySelector("#character").classList.add("falling", "position3");
	document.querySelector("#character").classList.add("speed3");

	document.querySelector("#character1").classList.add("falling", "position5");
	document.querySelector("#character1").classList.add("speed2");

	document.querySelector("#bomb").classList.add("falling", "position1");
	document.querySelector("#bomb").classList.add("speed3");

	document.querySelector("#bomb1").classList.add("falling", "position2");
	document.querySelector("#bomb1").classList.add("speed3");

	document.querySelector("#bomb2").classList.add("falling", "position4");
	document.querySelector("#bomb2").classList.add("speed2");

	document.querySelector("#coin1").classList.add("falling", "position4");
	document.querySelector("#coin1").classList.add("speed1");

	document.querySelector("#coin2").classList.add("falling", "position3");
	document.querySelector("#coin2").classList.add("speed1");

	document.querySelector("#coin3").classList.add("falling", "position5");
	document.querySelector("#coin3").classList.add("speed3");

	//document.querySelector("#pause_button").addEventListener("click", pauseGame);

	document.querySelector("#character").addEventListener("click", clickCharacter);
	document.querySelector("#character").addEventListener("animationiteration", reachBottom);
	document.querySelector("#character1").addEventListener("click", clickCharacter);
	document.querySelector("#character1").addEventListener("animationiteration", reachBottom);
	document.querySelector("#bomb").addEventListener("click", clickBomb);
	document.querySelector("#bomb").addEventListener("animationiteration", reachBottom);
	document.querySelector("#bomb1").addEventListener("click", clickBomb);
	document.querySelector("#bomb1").addEventListener("animationiteration", reachBottom);
	document.querySelector("#coin1").addEventListener("click", clickCoin);
	document.querySelector("#coin1").addEventListener("animationiteration", reachBottom);
	document.querySelector("#coin2").addEventListener("click", clickCoin);
	document.querySelector("#coin2").addEventListener("animationiteration", reachBottom);
	document.querySelector("#coin3").addEventListener("click", clickCoin);
	document.querySelector("#coin3").addEventListener("animationiteration", reachBottom);

}

function clickCoin() {
	console.log("click coin");
	let coin = this;

	scorePoint();
	coin.removeEventListener("click", clickCoin);
	coin.classList.add("pause");
	coin.querySelector(".sprite").classList.add("disappear");
	coin.addEventListener("animationend", restartCoin);

	if (!muted) {
		scoreFX.play();
		scoreFX.volume = soundVolume;
	}

}

function scorePoint() {
	console.log("scorePoint");
	points++;
	console.log("your points is");
	console.log("points");
	document.querySelector("#score").textContent = points;

	if (!muted) {
		scoreFX.play();
		scoreFX.volume = soundVolume;
	}


}

function restartCoin() {
	console.log("restart coin");
	let coin = this;
	coin.classList.remove("falling");
	coin.offsetHeight;
	coin.classList.add("falling");
	coin.classList.remove("pause");
	coin.querySelector(".sprite").classList.remove("disappear");
	coin.addEventListener("click", clickCoin);
}

function clickCharacter() {
	console.log("click character");
	let character = this;

	losePoint();
	character.removeEventListener("click", clickCharacter);
	character.classList.add("pause");
	character.querySelector(".sprite").classList.add("disappear");
	character.addEventListener("animationend", restartCharacter);
	characterFX.play();

}

function losePoint() {
	console.log("lose Point");
	points--;
	console.log("your points is");
	console.log(points);

	points -= 1;
	console.log("you have " + points + " points");
	document.querySelector("#score").textContent = "points " + points;

}

function restartCharacter() {
	console.log("restart character");
	let character = this;
	character.removeEventListener("animationend", restartCharacter);
	character.classList.remove("falling");
	character.offsetHeight;
	character.classList.add("falling");
	character.classList.remove("pause");
	character.querySelector(".sprite").classList.remove("disappear");
	character.addEventListener("click", clickCharacter);
}

function clickBomb() {
	console.log("click bomb");
	let bomb = this;
	bomb.removeEventListener("click", clickBomb);
	bomb.classList.add("pause");
	bomb.querySelector(".sprite").classList.add("explode");
	//document.querySelector("#screen").classList.add("shake");
	bomb.addEventListener("animationend", explode);

	if (!muted) {
		explosionFX.play();
		explosionFX.volume = soundVolume;

	}
}

function explode() {
	console.log("explosion");
	console.log("lose a life");
	console.log("you have a life");

	document.querySelector("#heart_"+life).classList.remove("active_heart");
	document.querySelector("#heart_" + life).classList.add("broken_heart");

	life--;
	console.log("you have " + life + " life left");


	document.querySelector("#screen").classList.add("shake");
	document.querySelector("#screen").addEventListener("animationend", restartBomb);


}

function restartBomb() {
	console.log("restart bomb");
	let bomb = this;
	bomb.removeEventListener("animationend", restartBomb);

	bomb.classList.remove("falling");
	bomb.classList.offsetHeight;
	bomb.classList.add("falling");
	bomb.classList.remove("pause");
	bomb.querySelector(".sprite").classList.remove("explode");
	//document.querySelector("#screen").classList.remove("shake");
	bomb.addEventListener("click", clickBomb);

	//bomb.addEventListener("click", clickBomb);
	if (life == 0) {
		console.log("gameover");
		gameOver();
		bgMusic.removeEventListener("ended", playBgMusic);
	}

}

function reachBottom() {
	//console.log("reachBottom");
	//console.log(this);
	let element = this;

	element.classList.remove("position1");
	element.classList.remove("position2");
	element.classList.remove("position3");
	element.classList.remove("position4");
	element.classList.remove("position5");
	element.classList.remove("position6");

	let number = Math.floor(Math.random() * 6 + 1);
	element.classList.add("position" + number);
}
function gameOver() {


	console.log("gameOver");
	timeBar.querySelector("#time_board .sprite2").classList.remove("timeend");


	document.querySelector("#gameover_screen").classList.remove("hide");

	document.querySelector(".tryagain_button").classList.add("pulse");
	document.querySelector(".tryagain_button").addEventListener("click", restartGame);

	document.querySelector(".home").classList.add("pulse");
	document.querySelector(".home").addEventListener("click", restartTitle);

	document.querySelector("#gameover").classList.remove("hide");
	bgMusic.pause();
}

function time() {
	console.log("time");
	timeBar.querySelector("#time_board .sprite2").classList.add("timeend");

	timeBar.addEventListener("animationend", countDownComplete);
}

function countDownComplete() {
	console.log("countDownComplete");

	timeBar.removeEventListener("animationend", countDownComplete);
	document.querySelector("#character").classList.remove("falling");
	document.querySelector("#character1").classList.remove("falling");
	document.querySelector("#bomb").classList.remove("falling");
	document.querySelector("#bomb1").classList.remove("falling");
	document.querySelector("#coin1").classList.remove("falling");
	document.querySelector("#coin2").classList.remove("falling");
	document.querySelector("#coin3").classList.remove("falling");

	timeBar.querySelector("#time_board .sprite2").classList.remove("timeend");
	bgMusic.removeEventListener("ended", playBgMusic);

	gameComplete();
}
function gameComplete() {
	console.log("gameComplete");

	document.querySelector(".play_again").classList.add("pulse");
	document.querySelector(".YOUWIN").classList.add("pulse");
	document.querySelector(".play_again").addEventListener("click", restartGame);

	document.querySelector(".home").classList.add("pulse");
	document.querySelector(".home").addEventListener("click", restartTitle);

	document.querySelector("#levelcomplete").classList.add("show_screen");


	document.querySelector("#levelcomplete").classList.remove("hide");
	bgMusic.pause();


}

function restartGame() {
	console.log("restart game");
	document.querySelector("#gameover").classList.add("hide");
	document.querySelector("#levelcomplete").classList.add("hide");

	document.querySelector(".tryagain_button").removeEventListener("click", restartGame);
	document.querySelector(".play_again").removeEventListener("click", restartGame);
	document.querySelector(".tryagain_button").removeEventListener("click", restartGame);

	startFalling();
	points = 0;
	life = 3;

	document.querySelector("#heart_1").classList.add("active_heart");
	document.querySelector("#heart_1").classList.remove("broken_heart");
	document.querySelector("#heart_2").classList.add("active_heart");
	document.querySelector("#heart_2").classList.remove("broken_heart");
	document.querySelector("#heart_3").classList.add("active_heart");
	document.querySelector("#heart_3").classList.remove("broken_heart");

	time();
	playBgMusic();

}

function restartTitle() {
	document.querySelector("#gameover_screen").classList.add("hide");
	document.querySelector("#levelcomplete").classList.add("hide");

	document.querySelector("#start_screen").classList.remove("hide");
	document.querySelector(".start_button").classList.remove("hide");
	document.querySelector(".start_button").classList.add("pulse");
	document.querySelector(".start_button").addEventListener("click", startGame);

	startFalling();
	points = 0;
	life = 3;

	document.querySelector("#heart_1").classList.add("active_heart");
	document.querySelector("#heart_1").classList.remove("broken_heart");
	document.querySelector("#heart_2").classList.add("active_heart");
	document.querySelector("#heart_2").classList.remove("broken_heart");
	document.querySelector("#heart_3").classList.add("active_heart");
	document.querySelector("#heart_3").classList.remove("broken_heart");

	time();
	playBgMusic();

}
