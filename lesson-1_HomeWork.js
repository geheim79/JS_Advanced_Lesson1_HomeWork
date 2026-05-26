// Домашнее задание (10 задач) 
// Задача 1: Банковский счет 
// Создайте класс BankAccount с приватными полями для balance и accountNumber. 
// Реализуйте методы deposit(amount), withdraw(amount), getBalance(). 
// Создайте наследующий класс SavingsAccount с методом addInterest(rate). 



// Решение : 


class BankAccount {
   #accountNumber // приватные поля
   #balance        
  constructor (accountNumber,balance){
    this.#accountNumber = accountNumber // 
    this.#balance = balance      // Конструктор назначает начальные значения приватным полям.
  }
    deposit (amount){    //метод deposit для пополнения счета, в приватном поле balance
    this.#balance = this.#balance + amount
  }
  withdraw(amount){ // метод withdraw для снятия со счета в приватном поле balance
    
    if (amount > this.#balance){ // если средств недостаточно - не выполнять операцию 
      return false
    } else {
       this.#balance = this.#balance - amount;
    }
  }
   getBalance(){ // метод геттер, через который будет доступ к приватным полям
    return `Номер счета: ${this.#accountNumber}, Баланс на счете: ${this.#balance} `
    // для получения данных(номер счета и баланса)
    // return this.#balance  
  }
  getBalanceInt (){ // метод для вывода числа баланса
     return this.#balance
  }
  
  }

const user1 = new BankAccount (1234, 300); // создаем новый обьект пользователя с данными 
// и передаем их через параметры в приватные поля в конструкторе

user1.deposit(800) // вызов метода deposit для пополнения баланса
user1.withdraw(600) //  вызов метода withdraw с параметром 600 для списания средств 
user1.getBalance() // везов метода getBalance для проверки баланса 


console.log(user1) // для проверки работы класса


// дочерний класс , берет баланс с родителя через метод 
// добавляет проценты и выводит его 

class SavingsAccount extends BankAccount { //наследование родителя BankAccount
      
      addInterest(perzent){                 // метод дочернего класса
      const current = super.getBalanceInt(); // запрос баланса через метод getBalanceInt родителя
      const bonus = current * (perzent / 100)  // считаем 10 процентов  от текущ баланса
      super.deposit (bonus)  // прибавляем процент к балансу через метод deposit родителя
    } 
                                            
  }
    
 
const prozent = new  SavingsAccount (1234, 800) // передадим процент в аргумент 
prozent.addInterest(10) // вызов метода для добавления процентов и проверки баланса

console.log(prozent.getBalanceInt()) // вызов метода SavingsAccount обьекта prozent


// Задача 2: Система управления библиотекой 
// Создайте классы: 
// ● Book (title, author, isbn, isAvailable) 
// ● Member (name, memberId, borrowedBooks[]) 
// ● Library (books[], members[]) 
// Реализуйте методы для добавления книг, регистрации участников, выдачи и возврата 
// книг. 

// Решение : 

// КЛАСС ДЛЯ ДОБАВЛЕНИЯ КНИГ // 
class Book {
  constructor(title, author, isbn, isAvailable){
   this.title = title;
   this.author = author;
   this.isbn = isbn;
   this.isAvailable = isAvailable
  }
    bookStatus(newStatus){ // метод для изменения статуса наличия книги
     this.isAvailable = newStatus
  }
}

// КЛАСС Member ДЛЯ ДОБАВЛЕНИЯ ПОЛЬЗОВАТЕЛЕЙИ ПРОВЕРКИ НАЛИЧИЯ У НИХ КНИГ //
class Member {
  constructor(name,memberId, borrowedBooks){
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = []; // создаём пустой массив для взятых книг
  }

  // метод для добавления  массива книг которые на руках у пользователя
userBooks (book){
   this.borrowedBooks.push(book)
}

}

 // УПРАВЛЯЮЩИЙ КЛАСС БИБЛИОТЕКИ ДЛЯ СОЗДАНИЯ ПОЛЬЗОВАТЕЛЕЙ, КНИГ И УЧЕТА КНИГ 
 // У ПОЛЬЗОВАТЕЛЕЙ :

class Library {
  constructor(){
    this.books = [] // создание пустого массива для книг
    this.members = [] // создание пустого массив для пользователей
    
  }
  // метод для добавления пользователей через конструктор в классе Member
  // и добавления обьектов порльзователей в массив :

  addMember ( name, memberId) { // метод для создания пользов-й и книг
     const member = new Member (name, memberId) //обращение к классу Member 
     this.members.push(member) // перемещение пользователя member з в массив с пользователями members
  }

  // метод для добавления книг через конструктор в классе Book и добавления книг в массив books :

   addBook (title,author,isbn){
    const book = new Book(title,author,isbn) // обращение к классу Book через метод addBook для создания обьекта новой книги
    this.books.push(book) // перемещение книги в массив books для хранения книг
   }

   // метод выдачи книги :
   

  
}

const library = new Library();


// ПРОВЕРКА : 

// КНИГИ :
// 
// создание нового обьекта книги newBook через конструктор Book :
const newBook = new Book ("Братья Карамазовы","Достоевский",1111, "Available" )
// newBook для проверки обьекта
// вызов метода для изменения статуса книги
 newBook.bookStatus("Not available") // "Not available"
// newBook для проверки статуса книги


// ПОЛЬЗОВАТЕЛИ : 
// создание нового пользователя newUser через вызов конструктора Member :
 const newUser = new Member ("Савочкин Алексей","id 1" ) // передаемс только name , memberId а borrowedBooks передадим уже через метод addBook
// newUser для проверки

// КНИГИ + ПОЛЬЗОВАТЕЛЬ : 
// реализация метода addBook для учета наличия книг у пользователя
newUser.userBooks("Гарри Потер") // для проерки добавления книги в массив 
newUser.userBooks("Война и мир") // для проверки еще одна книга
// newUser для проверки обьекта 

// БИБЛИОТЕКА :
// добавляем книги
library.addBook("Война и мир", "Толстой", 101);
library.addBook("Идиот", "Достоевский", 102);

// регистрируем участников
library.addMember("Савочкин Алексей", 1);
library.addMember("Савочкина Эльмира", 2);





