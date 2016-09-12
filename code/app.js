window.onload = function() {

	var playAgainButton = document.getElementById('play-again');
	var playerOne = document.getElementById('player1');
	var playerTwo = document.getElementById('player2');
	var playerOneScore = 0;
	var playerTwoScore = 0;

	console.log('Game Board has loaded, players have been aquired... ');
	console.log('Player One has' + ' ' + playerOneScore + ' ' + 'points');
	console.log('Player Two has' + ' ' + playerTwoScore + ' ' + 'points');

	addPlayerOneListener();
	addPlayerTwoListener();

	document.onkeydown = function (event) {
		var keyPressed = event.keyCode;
		console.log('You have pressed the' + ' ' + keyPressed + ' ' + 'key.');
		if(keyPressed == 65) {
			movePlayerOne();
		}
		if(keyPressed == 76) {
			movePlayerTwo();
		}
	};

	function addPlayerOneListener() {
		playerOne.setAttribute('score', playerOneScore);
		
	};

	function addPlayerTwoListener() {
		playerTwo.setAttribute('score', playerTwoScore);
	};

	function movePlayerOne() {
		if(playerOneScore < 600 && playerTwoScore < 600) {
			playerOneScore = playerOneScore + 10;
			playerOne.setAttribute('style', 'left:' + ' ' + playerOneScore + 'px');
			checkForWinner();
		}
		console.log('Player One has' + ' ' + playerOneScore + ' ' + 'points');
	};

	function movePlayerTwo() {
		if(playerTwoScore < 600 && playerOneScore < 600) {
			playerTwoScore = playerTwoScore + 10;
			playerTwo.setAttribute('style', 'left:' + ' ' + playerTwoScore + 'px');
			checkForWinner();
		}
		console.log('Player Two has' + ' ' + playerTwoScore + ' ' + 'points');
	};

	function checkForWinner() {
		var results = document.getElementById('results');
		var winner = document.querySelector('h1');

		if(playerOneScore === 600) {
			results.style.display = "block";
			winner.innerHTML = "Red Player Is The Winner...!";
			playAgainButton.setAttribute('click', startOver);
		} else if(playerTwoScore === 600) {
			results.style.display = "block";
			winner.innerHTML = "White Player Is The Winner...!";
		}
	};

	function startOver() {
		playerOneScore = 0;
		playerOne.removeAttribute('style', 'left: 0px');
		playerOne.style.left = "0";
	};

};