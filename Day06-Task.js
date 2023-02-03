/*
Question-01:
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

. title, which is a String representing the title of the movie
. studio, which is a String representing the studio that made the movie
. rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/

// ES6

class Movie {

    constructor(title, studio, rating = "PG") {

        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }

    getPG = () => {

        console.log(this.rating);

    }


}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
let movie2 = new Movie("123", "Eon Productions");
let movie3 = new Movie("456", "Eon Productions", "PG­13");
let movie4 = new Movie("789", "Eon Productions", "PG­15");
let movie5 = new Movie("abc", "Eon Productions", "PG");

movie1.getPG();


//***********************************************************************************************************

/*
Question-03:
Write a “person” class to hold all the details.
*/

// ES5 
/*
function person() {

    this.firstName = "unknown";
    this.lastName = "unknown";
    this.age = "unknown";
    this.dob = "unknown";
    this.maritalStatus = "unknown";
    this.details = function() {

        return `Person Name is ${this.firstName} ${this.lastName}. Age is ${this.age}. DOB is ${this.dob}. Marital Status is ${this.maritalStatus} `;
        
    };

}

let person1 = new person();
person1.firstName = "Mohamed";
person1.lastName = "Saleem";
person1.age = "26";
person1.dob = "28/12/1996";
person1.maritalStatus = "Unmarried";

console.log(person1.details());
*/

// ES6

class Person {

    constructor(firstName, lastName, age, dob, maritalStatus) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = dob;
        this.maritalStatus = maritalStatus;
    }

    details = () => {
        return `Person Name is ${this.firstName} ${this.lastName}. Age is ${this.age}. DOB is ${this.dob}. Marital Status is ${this.maritalStatus} `;
    }
}

let person1 = new Person("Mohamed", "Saleem", 26, "28/12/1996", "Unmarried");

console.log(person1.details());


// Output for Question-03:
// Person Name is Mohamed Saleem. Age is 26. DOB is 28/12/1996. Marital Status is Unmarried

//***********************************************************************************************************

/*
Question-04:
write a class to calculate the uber price.
*/

// ES6

class UberPrice {

    constructor(distance, price) {

        this.distance = distance;
        this.price = price;

    }

    details = () => {

        let totalFare = this.distance * this.price;
        return `Total Fare for ${this.distance}kms at ${this.price}/km is ${totalFare} `;
    }
}

let trip1 = new UberPrice(26, 20);

console.log(trip1.details());

//***********************************************************************************************************
