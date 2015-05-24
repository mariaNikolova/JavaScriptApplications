(function () {
	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('./node_modules/underscore/underscore.js');
	}

	var Book = Object.create({
		init: function (book,author,price,language) {
			this.book = book;
			this.author = author;
			this.price = price;
			this.language = language;
			return this;
		},
		toString: function () {
			return this.book + ' ' + this.author + "  " + this.price + "  " + this.language;
		}
	});


	var book = [
		Object.create(Book).init("The Grapes of Wrath","John Steinbeck",34.24,"French"),
		Object.create(Book).init("The Great Gatsby","F. Scott Fitzgerald",39.26,"English"),
		Object.create(Book).init("Nineteen Eighty-Four","George Orwell",15.39,"English"),
		Object.create(Book).init("Ulysses","James Joyce",23.26,"German"),
		Object.create(Book).init("Lolita","Vladimir Nabokov",14.19,"German"),
		Object.create(Book).init("Catch-22","Joseph Heller",47.89,"German"),
		Object.create(Book).init("The Catcher in the Rye","J. D. Salinger",25.16,"English"),
		Object.create(Book).init("Beloved","Toni Morrison",48.61,"French"),
		Object.create(Book).init("Of Mice and Men","John Steinbeck",29.81,"Bulgarian"),
		Object.create(Book).init("Animal Farm","George Orwell",38.42,"English"),
		Object.create(Book).init("Finnegans Wake","James Joyce",29.59,"English"),
		Object.create(Book).init("The Grapes of Wrath","John Steinbeck",42.94,"English")
		
	];

	var groupOfBooksSorted = _.chain(book)
        .sortBy(function (book) {
            return [book.author, book.price].join("_");
        })
        .groupBy('language')
        .value();

    console.log('---------- Group all books by language and sort them by author (if two books have the same author, sort by price) ----------');
    console.log(groupOfBooksSorted);

    var averageBookPrices = {};

    _.each(book, function (book) {
        var price = parseFloat(book.price);
        var author = book.author;
        if (!averageBookPrices[author]) {
            averageBookPrices[author] = {
                'booksLength': 0,
                'totalPrice': 0
            };
        }

        averageBookPrices[book.author]['booksLength'] += 1;
        averageBookPrices[book.author]['totalPrice'] += price;
    });

    console.log('---------- The average book price for each author ----------');
    for (var author in averageBookPrices) {
        var averageBookPrice = averageBookPrices[author]['totalPrice'] / averageBookPrices[author]['booksLength'];
        console.log(author + ', Average book price: ' + averageBookPrice.toFixed(2));
    }
    var cheapEnglishAndGermanBooks = _.chain(book)
        .filter(function (book) {
            return (book.language === 'English' || book.language === 'German') && parseFloat(book.price) < 30;
        })
        .groupBy('author')
        .value();

    console.log('---------- All books in English or German, with price below 30.00, and group them by author ----------');
    console.log(cheapEnglishAndGermanBooks);
    
}());