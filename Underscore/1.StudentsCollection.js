(function () {
	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('./node_modules/underscore/underscore.js');
	}

	var Person = Object.create({
		init: function (gender,firstName, lastName, age,country) {
			this.gender = gender;
			this.firstName = firstName;
			this.lastName= lastName;
			this.age = age;
			this.country = country;
			return this;
		},
		toString: function () {
			return this.gender + ' ' + this.firstName + "  " + this.lastName + "  " + this.age + "  " + this.country ;
		}
	});


	var people = [
		Object.create(Person).init('Male', 'Joe', "Riley",22,"Russia"),
		Object.create(Person).init("Female","Lois","Morgan",41,"Bulgaria"),
		Object.create(Person).init("Male","Roy","Wood",33,"Russia"),
		Object.create(Person).init("Female","Diana","Freeman",40,"Argentina"),
		Object.create(Person).init("Female","Bonnie","Hunter",23,"Bulgaria"),
		Object.create(Person).init("Male","Joe","Young",16,"Bulgaria"),
		Object.create(Person).init("Female","Kathryn","Murray",22,"Indonesia"),
		Object.create(Person).init("Male","Dennis","Woods",37,"Bulgaria"),
		Object.create(Person).init("Male","Billy","Patterson",24,"Bulgaria"),
		Object.create(Person).init("Male","Willie","Gray",42,"China"),
		Object.create(Person).init("Male","Justin","Lawson",38,"Bulgaria"),
		Object.create(Person).init("Male","Ryan","Foster",24,"Indonesia"),
		Object.create(Person).init("Male","Eugene","Morris",37,"Bulgaria"),
		Object.create(Person).init("Male","Eugene","Rivera",45,"Philippines"),
		Object.create(Person).init("Female","Kathleen","Hunter",28,"Bulgaria")
	];

	//console.log("People-------");
	//console.dir(_.map(people, function (people) {
	//	return people.toString();
	//}));
	console.log("-----People between 18 and 24 age------");
	var between18And24YearOlds = _.filter(people,function(p) {
		return p.age > 18 && p.age < 24 ;
	});

	_.each(between18And24YearOlds, function (p) {
		console.log(p.toString());
	});
	
	 console.log('---------- All students whose first name is alphabetically before their last name ----------');
	 var alphabeticallyStudents = _.filter(people, function (student) {
        return student.firstName < student.lastName;
    });

    _.each(alphabeticallyStudents, function (student) {
        console.log(student);
    });

	console.log("-------People from Bulgaria---------");
	var peopleFromBulgaria = _.filter(people,function(p){
		return p.country == "Bulgaria";
	});

	var peopleFromBulgariaFirstName = _.pluck(peopleFromBulgaria ,'firstName');
	console.log('---Firstnames: ');
	console.log(peopleFromBulgariaFirstName);

	console.log('------Last five people------');
	var rest = _.rest(people,10);
	console.log(rest.toString());

	console.log('-----First three people whose not from Bulgaria---------:');
	var peopleNotFromBulgaria = _.reject(people, function (p) {
		return p.country === 'Bulgaria';
	});

	var peopleNotFromBulgariaMale = _.where(peopleNotFromBulgaria,{
		gender:"Male"
	});
	var firstThree = _.first(peopleNotFromBulgariaMale,3);
	console.log(firstThree.toString());
}());