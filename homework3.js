// A function that takes at least three arguments and returns the result of some set of operations using those arguments
const func1 = function(a,b,c) {
	const result1 = a + b + c,
		  result2 = a - b - c,
	      result3 = a*b*c,
		  result4 = a*b/c;

	return result1,result2,result3, result4;
}
func1(1,2,3);

// A function that takes no arguments and returns something
const func2 = function() {
	
	const str = "Returned String";
	return str;
}
func2();

// A function that takes arguments, does something but does not return anything
const func3 = function(arg1,arg2){

	const final = (arg1*arg2)/100;
	console.log("not return anything");

}
func3(200,100);

// A function called fullName that takes as argument first name and last name and returns the full name of the person
const fullName = function(firstName,lastName){
	return (firstName + " " + lastName);
}
fullName("Petros","Petrosyan");

// A function that takes three strings and returns the string that is the longest
const func4 = function(str1,str2,str3){
	if(str1.length > str2.length && str1.length > str3.length){
		return str1;
	}
	if (str2.length > str1.length && str2.length > str3.length) {
		return str2;
	}
	if(str3.length > str1.length && str3.length > str2.length){
		return str3;
	}
}
func4("Poxos","Petrosyan","Hayk");

// A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const func5 = function(num1, num2) {
	if (num1 === num2) {
		return 0;
	}
	if (num1 > num2) {
		return 1;
	}
	if (num1 < num2) {
		return -1;
	}
}
func5(15,16);

// A function that takes three inputs and returns the first truethy value
 const func6 = function(val1,val2,val3){
 	if (val1) {
 		return val1;
 	}
 	if (val2) {
 		return val2;
 	}
 	if (val3){
 		return val3;
 	}

 }
 func6(0, '', 1);
