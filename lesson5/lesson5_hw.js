/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/

let person = {
   year: 1986,
   name: "Ira",
   secondName: "Galtsova", 
   getInfo() {
     return `Year: ${this.year}, Name: ${this.name}, Second Name: ${this.secondName}`;
   },
   getFullName() {
     return `${this.name} ${this.secondName}`;
   }
 };
 
 console.log(person.getInfo());
 console.log(person.getFullName());
 
 
 /* Task - 2 (Not required)
    Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
    додавши додаткову властивість до об'єкта "person". 
    "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)
 
  * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
 */
 
 let createRobot =() => {
   let person = {
     year: 1986,
     name: "Ira",
     secondName: "Galtsova", 
     getInfo() {
       return `Year: ${this.year}, Name: ${this.name}, Second Name: ${this.secondName}`;
     },
     getFullName() {
       return `${this.name} ${this.secondName}`;
     }
   };
 
   let robot = Object.assign({}, person, { batteryEnergy: 50 });
   return robot;
 };
 
 let myRobot = createRobot();
 console.log(myRobot.getInfo());
 console.log("Battery Energy:", myRobot.batteryEnergy);
 
 /* Task - 3 
    Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
    перевіркою наявності у об'єкта властивості (batteryEnergy)
 */
 
 let isARobot = (obj) => {
   if (obj.hasOwnProperty('batteryEnergy')){
     console.log("Object is a robot");
   } else {
     console.log("Object is not a robot");
   }
 };
 
 isARobot(myRobot);
 
 /* Task - 4 (Not required)
 
 Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
 
 var services = {
    "стрижка": "60",
    "гоління": "80",
    "Миття голови": "100"
 };
 
 Завдання:
 - створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
 - створити метод minPrice() - який повертає мінімальний price
 - створити метод maxPrice() - який повертає максимальний price
 */
 
 // let services = {
 //   "стрижка": "60",
 //   "гоління": "80",
 //   "Миття голови": "100"
 // };
 
 // let salon = {
 //   services,
 //   price() {
 //     return Object.values(this.services).reduce((total, price) => total + Number(price), 0);
 //   },
 //   minPrice() {
 //     return Math.min(...Object.values(this.services).map(Number));
 //   },
 //   maxPrice() {
 //     return Math.max(...Object.values(this.services).map(Number));
 //   }
 // };
 
 // console.log("Total Price:", salon.price());
 // console.log("Min Price:", salon.minPrice());
 // console.log("Max Price:", salon.maxPrice());