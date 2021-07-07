// Define your Book class here:
class Book {
  constructor(title, author, copyrightYear, isbn, numberOfPages, checkedOutTimes, isDiscarded){
    this.title = title;
    this.author = author;
    this.copyrightYear = copyrightYear;
    this.isbn = isbn;
    this.numberOfPages = numberOfPages;
    this.checkedOutTimes = checkedOutTimes;
    this.isDiscarded = isDiscarded;
  }
  checkout(uses = 1){
    this.checkedOutTimes += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
  constructor(title, author, copyrightYear, isbn, numberOfPages, checkedOutTimes, isDiscarded){
  super(title, author, copyrightYear, isbn, numberOfPages, checkedOutTimes, isDiscarded)
  }
   
  checkYear(currentYear){
    if(currentYear - this.copyrightYear < 5){
      this.isDiscarded = "Yes";
    }
  }
}


class Novel extends Book{
  constructor(title, author, copyrightYear, isbn, numberOfPages, checkedOutTimes, isDiscarded){
  super(title, author, copyrightYear, isbn, numberOfPages, checkedOutTimes, isDiscarded)
  }  
  dispose(){
    if(checkedOutTimes > 100){
      this.isDiscarded = true;
    }
  }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austin", 1813, "1111111111111", 432, 32, "No");

let shipBuilding = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:

console.log(prideAndPrejudice);
console.log(shipBuilding);
prideAndPrejudice.checkout(5);
console.log(prideAndPrejudice);


