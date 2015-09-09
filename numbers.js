//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var sum = num10 + parseInt(string8) + one;

//2. write a loop that will log only numbers divisible by 3 between 20 - 100



for (var i = 20; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var sum = 0;
for (var i = 0; i < scores.length; i++) {
	sum = sum + scores[i];
}

var average = sum / scores.length;

// or

var sum = 0; 
sum = sum + scores[0];
sum = sum + scores[1];
sum = sum + scores[2];
sum = sum + scores[3];
sum = sum + scores[4];
sum = sum + scores[5];
sum = sum + scores[6];
sum = sum + scores[7];
sum = sum + scores[8];
sum = sum + scores[9];

var average = sum / 10;
