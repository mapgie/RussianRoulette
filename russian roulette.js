//Russian Roulette

//How many bullets to use:
do
{
    var bullets = +prompt("How many bullets in the revolver?");
    if (bullets <= 0)
	{
		alert("I'll put a bullet in for you, then.");
		bullets = 1;
	} else if (bullets > 6) {
		alert("There are only 6 chambers. Keep the spares.");
		bullets = 6;
	}
}
while (isNaN(bullets));

console.log("Let's play with", bullets, "bullets.");
// Bullet(s) placed in the chamber.
// 6 chambers.
//var chamber = +prompt("The bullet is in chamber:");

// Allocate positions to the chambers.
var chambers = [0, 0, 0, 0, 0, 0];

// Put the bullets in. # of chamber with bullet inside
for(var j = 1; j <= bullets; ++j) chambers[j-1] = j;

// Compare spin strike to bullet chamber
var compare = function(a, b)
{
	return a === b;
};

// Keeps pulling trigger for as long as participant wants.
// Compare bullets and spin:
// Count spins until death.

// METHOD 1

var k = 1;
for(var k = 0; k < bullets; ++k) {
	if (compare(spin, chambers[k])
	{
		console.log("You've been hit. Dead at attempt", i + ".");
		break;
	}
}



// ********************

// METHOD 2

/* var i = 1 //counts the spins
do {
    spin = Math.floor((Math.random() * 6) + 1); //Spin the barrel
	if (spin > bullets)
		{
			console.log("You hit", spin, "but the bullets were in", chambers + ". You live to play again.");
			++i;
			var again = confirm("Spin again?");
		}
		else
		{
			console.log("Bang. You die.");
			console.log("You hit", spin, "but the bullets were in", chambers + ".")
			console.log("Attempt", i + ".");
			again = false;
		}
}
while (again); */