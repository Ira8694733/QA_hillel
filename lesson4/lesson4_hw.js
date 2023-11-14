/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/

const myIsNaN = (a) => {
    return a;
  };
  console.log(isNaN(myIsNaN("42")));
  console.log(isNaN(myIsNaN(42)));
  console.log(isNaN(myIsNaN("Hello")));
  
  let myIsNumber = 'Kyiv';
  console.log(isNaN(myIsNumber));

/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

const generateRandomNumbers =(count) => {
    let evenCount = 0;
    let oddCount = 0;

    // Згенерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно
      for (let i = 0; i < count; i++) {
      const rnd = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    // Порахувати кількість парних та непарних серед них. 
    if (rnd % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    }
    // Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50
    let percentageEven = (evenCount / count) * 100;
    let percentageOdd = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(0)}% : ${percentageOdd.toFixed(0)}%`);
    
  }

generateRandomNumbers(9);


/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

const pad2 = (str, char, count, addToStart) => {
    if (addToStart === true) {
      return str.padEnd(str.length + count, char);
    } else {
      return str.padStart(str.length + count, char);
    }
  };
  
  const paddedString2 = pad2("qwerty", "+", 5, true);
  console.log(paddedString2);