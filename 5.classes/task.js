"use strickt"

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state *= 1.5; 
        }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type="magazine"){
        super(name, releaseDate, pagesCount, state, type);
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state = 100, type='book'){
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type='novel'){
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class FantasticBook extends Book{
   constructor(author, name, releaseDate, pagesCount, state = 100, type='fantastic'){
    super(author, name, releaseDate, pagesCount, state, type);
   }
}

class DetectiveBook  extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type='detective'){
     super(author, name, releaseDate, pagesCount, state, type);
    }
 }


 class Library{
    constructor(name, books=[]){
        this.name = name;
        this.books = [...books];
    }
    addBook(book){
        if (book?.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        const result = this.books.find((book) =>
             book.hasOwnProperty(type) && book[type] === value ) ; 
        return result || null
    }

    giveBookByName(bookName){
        const index = this.books.findIndex(book => book?.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
 
}



const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

   const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


  const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.books);
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3