//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Jonny Porter';
me.age = 16;
me['hair color'] = 'light brown';

//2. Iterate over the object to console.log the property or key names. 

for (var key in me) {
	console.log(key + " = " + me[key]);
}