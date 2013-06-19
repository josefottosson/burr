var myApp = {

init: function()
{
	var players = [
	"Josef",
	"Sebastian",
	"Palmer",
	"Jacob",
	"Ståhl",
	"Hertz",
	"Carl"
	];
	var burrNumber = 7;
	myApp.play(1000, burrNumber, players);
},

//Times to run, "burr number" and players
play: function(times, burrNumber, players)
{
	var playerIterator = 0, player = "";

	for(var i = 1; i <= times; i++ )
	{
		//Get the current players name
		player = players[playerIterator];
		playerIterator++;
		//Check so iterator doesn't exceeds the length of the players array
		if(playerIterator === players.length)
		{
			playerIterator = 0;
		}
		//If divisible without residue or digit exists in i
		if(i % burrNumber === 0 || i.toString().indexOf(burrNumber.toString()) >=0 )
		{
			console.log(player + ': Burr!');
			//Change the direction of the game
			players = myApp.changeDirection(players, playerIterator);
			//Set the iterator to 1 to avoid the player who burred
			playerIterator = 1;
		}
		//Print out the number
		else
		{
			console.log(player + ": " +i);
		}
	}
},

changeDirection: function(oldOrder, playerIndex)
{
	//Player who "burred"
	var burredPlayer = oldOrder[playerIndex];
	//Remove him from the old order
	oldOrder.splice(playerIndex, 1);
	//All players who was before the player who burred
	//Add to array and reverse it
	var playersBefore = oldOrder.splice(0, playerIndex).reverse();
	//Create the new order, concat the arrays and append the player who burred at the end.
	var newOrder = [];
		newOrder = newOrder.concat(playersBefore, oldOrder.reverse());
		newOrder.push(burredPlayer);
	return newOrder;
}

};

window.onload = myApp.init;