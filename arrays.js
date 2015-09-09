//1. What is the length of the following contacts array?

// 0

var contacts = [];


//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};

contacts.push(jake);
contacts.push(matt);
contacts.push(chris);
contacts.push(tony);
contacts.push(andrew);
contacts.push(stefan);

//3. Woops after adding all of those people to the same contacts list you realized you need to list just the mentors. Create a new variable named mentors, populate it using contacts array. 

var mentors = [];
mentors.push(contacts[3]);
mentors.push(contacts[4]);
mentors.push(contacts[5]);

// or

var mentors = [contacts[3], contacts[4], contacts[5]];