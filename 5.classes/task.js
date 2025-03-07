//Задача 1
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


//Задача 2
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

//Задача 3
class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject){
        if(mark>=2 && mark<=5){
            this.marks
        
        if(subject in this.marks){
            this.marks[subject].push(mark);
        }else{
            this.marks[subject] = [mark];
        }
    }
    }
    getAverageBySubject(subject){
        if(!(subject in this.marks)){
            return 0;
        }
        return this.marks[subject].reduce((x,y) => x+y, 0) / this.marks[subject].length;
    }

    getAverage(){
        if (Object.keys(this.marks).length==0){
            return 0;
        }
        return Object.keys(this.marks).reduce((x, y)=> x + this.getAverageBySubject(y), 0)/Object.keys(this.marks).length;
    }

}