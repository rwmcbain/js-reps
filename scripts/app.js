
// Round 1

var students = ['russell', 'rena', 'jim', 'brett'];

function lengths(myStudents){
	//return arrayOfStrings;
	var myArray = [];
 	for (i = 0; i < students.length; i++) {
		myArray.push(students[i].length);
 }

console.log(myArray);
return myArray;

}
lengths(students);



// Round 2


function transmogrifier(x,y,z){
	var trans = Math.pow((x*y), z);
	return trans;
}

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)


// Round 3


function toonify(accent, sentence){
	var modSentence;

	if (accent === 'daffy'){
		modSentence = sentence.replace(/s/gi, "th");
		console.log(modSentence);

	} else if (accent === 'elmer') {
		modSentence = sentence.replace(/r/gi, "w");
} 	else {
	console.log(sentence);
}
	return modSentence;
}


// Round 4


var finalString = []

function wordReverse(aString){
	finalString = aString.split(" ").reverse().join(" ");
	console.log(finalString);
	return finalString;
}

// Round 5

var finalString = []
var finalStringTwo = []

function wordReverse(aString){
	finalString = aString.split("").reverse().join("");
	console.log(finalString);
	finalStringTwo = finalString.split(" ").reverse().join(" ");
	return finalStringTwo;
}



wordReverse("Now I know what a TV dinner feels like")


// Round 6


var names = ['Russell','Renaa','Brett','Michael'];

function longest(aString){

	var long = '';
	var student='';

		for(var i = 0; i < aString.length; i++){
    		if(aString[i].length > long){
        		var long = aString[i].length;
        		student = aString[i];
    		}
		} 
    	return student;
}
console.log(longest(names));

// Round 7


function repMaster(x, y) {

}
