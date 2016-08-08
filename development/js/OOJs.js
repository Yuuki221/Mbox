/**
	Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
*/

// 1. Namespace: In JavaScript a namespace is just another object containing methods, properties and objects,
// ** in JS, there is no language level difference between regular objects and namespace. 

// global namespace
var MYAPP = MYAPP || {};

// sub namespace
MYAPP.event = {
	addListener: function(el, type, fn){
		// code something
	},

	removeListener: function(el, type, fn){
		// code something 
	}
};

// create a namespace and adding variables, functions and properties 
MYAPP.commonMethod = {
	regExForName: "",
	regExForPhone: "",
	validateName: function(name){
		// do something to name 
	},

	validatePhoneNo: function(phoneNo){
		// do something to phoneNumber 
	}
}

// 2. Custom objects 
// JavaScript uses functions as constructors for classes 

// empty constructor
var Person = function(){};

// the object, class instance 
var person1 = new Person();
var person2 = new Person();

// The constructor, constructor is called at the moment of instantiation (the moment when the object instance is created )
// The constructor is a method of the class, the function serve as a constructor, no need to define it explicitly 




