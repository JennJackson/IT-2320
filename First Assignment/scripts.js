


function RandomFaction()
{	
var factionArray = ['Alliance', 'Horde'];
var randomFactionText = Math.floor(Math.random() * factionArray.length);

document.getElementById('factionText').innerHTML  = factionArray[randomFactionText];
}

function RandomClassAndSpec()
{	
var classAndSpecArray = [
'Arms Warrior', 'Fury Warrior', 'Protection Warrior',
'Holy Paladin', 'Protection Paladin', 'Retribution Paladin',
'Beast Mastery Hunter', 'Marksmanship Hunter', 'Survival Hunter',
'Assassination Rogue', 'Outlaw Rogue', 'Subtlety Rogue',
'Discipline Priest', 'Holy Priest', 'Shadow Priest',
'Blood Death Knight', 'Frost Death Knight', 'Unholy Death Knight',
'Elemental Shaman', 'Enhancement Shaman', 'Restoration Shaman',
'Arcane Mage', 'Fire Mage', 'Frost Mage',
'Affliction Warlock', 'Demonology Warlock', 'Destruction Warlock',
'Brewmaster Monk', 'Mistweaver Monk', 'Windwalker Monk',
'Balance Druid', 'Feral Druid', 'Guardian Druid', 'Restoration Druid',
'Havoc Demon Hunter', 'Vengeance Demon Hunter'
];
var randomClassAndSpec = Math.floor(Math.random() * classAndSpecArray.length);

document.getElementById('classAndSpecText').innerHTML  = classAndSpecArray[randomClassAndSpec];
}