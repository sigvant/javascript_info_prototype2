Add toString to the dictionary
importance: 5
There’s an object dictionary, created as Object.create(null), to store 
any key/value pairs.

Add method dictionary.toString() into it, that should return a 
comma-delimited list of keys. Your toString should not show up 
in for..in over the object.

Here’s how it should work:

let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property 
// key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

## Attempt at Solution

// we need a method so we need a function for the object

toString: value() {
	return Object.keys(this).join();
}

// ok but this will make it show up in the for..in loop
// if we create a property using a descriptor, its flags 
// are false by default, so...

let dictionary = Object.create(null, {
	toString: { // definte toString property
		value() { // the value is a function
			return Object.keys(this).join();
		}
	}
});

####################################################################

The difference between calls
importance: 5
Let’s create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

These calls do the same thing or not?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

The first call has this == rabbit, the other ones have this equal to
Rabbit.prototype, because it's actually the object before the dot.

SO only the first call shows Rabbit, other ones show undefined.

