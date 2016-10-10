var Main = {};
Main.People = [];

////////////////////////////////////////////////////////////////////////
//Constructor														  //
////////////////////////////////////////////////////////////////////////

Main.Person = function(firstName, lastName, characterName, houseName)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.CharacterName = characterName;
	this.HouseName = houseName;
	
	Main.People.push(this);
}

////////////////////////////////////////////////////////////////////////
//Functions															  //
////////////////////////////////////////////////////////////////////////

Main.Person.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName;
}

Main.Person.prototype.MakeTableRow = function()
{
	return document.body.innerHTML += "<div class='firstColumns'>" + this.GetFullName() + "</div>" +  
								"<div class='firstColumns'>" + this.CharacterName + "</div>" + 
								"<div class='lastColumn'>" + this.HouseName + "</div>";
}

Main.SetUpHeaders = function()
{
	document.body.innerHTML = "<div class='headers'> Name </div>" +
							"<div class='headers'> Character Name </div>" +
							"<div class='headerLast'> House </div>";
}

////////////////////////////////////////////////////////////////////////
//Objects															  //
////////////////////////////////////////////////////////////////////////

Main.Harry = new Main.Person("Daniel", "Radcliffe", "Harry Potter", "Gryffindor");
Main.Ron = new Main.Person("Rupert", "Grint", "Ron Weasley", "Gryffindor");
Main.Hermione = new Main.Person("Emma", "Watson", "Hermione Granger", "Gryffindor");

Main.Luna = new Main.Person("Evanna", "Lynch", "Luna Lovegood", "Ravenclaw");
Main.Cho = new Main.Person("Katie", "Leung", "Cho Chang", "Ravenclaw");
Main.Padma = new Main.Person("Afshan", "Azad", "Padma Patil", "Ravenclaw");

Main.Tonks = new Main.Person("Natalia", "Tena", "Tonks", "Hufflepuff");
Main.Cedric = new Main.Person("Robert", "Pattinson", "Cedric Diggory", "Hufflepuff");
Main.Hannah = new Main.Person("Charlotte", "Skeoch", "Hannah Abbott", "Hufflepuff");

Main.Draco = new Main.Person("Tom", "Felton", "Draco Malfoy", "Slytherin");
Main.Severus = new Main.Person("Alan", "Rickman", "Severus Snape", "Slytherin");
Main.Bellatrix = new Main.Person("Helena Bonham", "Carter", "Bellatrix Lestrange", "Slytherin");

////////////////////////////////////////////////////////////////////////
//Usages															  //
////////////////////////////////////////////////////////////////////////

Main.SetUpHeaders();

for(person of Main.People)
{
	person.MakeTableRow();
}

