# [rsschool-cv](https://goldmarkol.github.io/rsschool-cv)

# Maryia Harnashevich

### Junior Frontend Developer

## Contacts:

- Location: Belarus, Minsk
- Phone: +375291632003
- E-mail: lightbrown9874@gmail.com
- Github: [goldmarkol](https://github.com/goldmarkol)
- LinkedIn: [Maria Gornashevich](https://www.linkedin.com/in/maria-gornashevich-4b8a371b8/)

## Summary about myself:

First and foremost, I love writing code. Ever since writing my first program in JavaScript, I have been obsessed of using software to create something global and useful. I believe in the power of programming to improve and totally transform the lives of people around the world.

For my first professional contact, I was working as a Trainee JS developer and later as a Junior JS developer. I have created web apps using React, Redux and NextJS. Also I was given the opportunity to work in a good team for interesting projects. Even when I left my work, I tend to continue writing code and learn new technologies. I like to play the piano, read many books, listening to music and meditate. All these little things help me to stay creative, organized and happy with my life and everything I do.

I am completely sure that my ability to work hard and passion to learn new technologies will help in my future career as a professional Frontend Developer. That is what keeps me up at night, a never ending thirst to create beautiful, powerful things and share them with the world.

## Skills and Proficiency:

- HTML, CSS(Framework Bootstrap, Preprocessor SASS,SCS; BEM methodology, JQuery).
- JavaScript (Fundamentals,Functional Programming, OOP, Asynchronous JavaScript, ES6+,DOM),JSON.
- React, Redux, NextJS
- Git, GitHub, BitBucket, Agile
- Algorithms
- Module Bundlers: Gulp, Webpack.
- VS Code, Figma

## Code example:

### Binary search implementation

```
function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));
console.log(binary_search(my_list, -1));
```

### Quick array sorting implementation

```
function quicksort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];

  let less = array.slice(1).filter(function (el) {
    return el <= pivot;
  });

  let greater = array.slice(1).filter(function (el) {
    return el > pivot;
  });

  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3]));
```

## Education:

- Bachelor, Minsk State Linguistic University, Belarus/Minsk
  - English Faculty
- Master, Minsk State Linguistic University, Belarus/Minsk
  - Linguistic support of intercultural communication (english, chinese languages)
- Courses
  - [Udemy video lectures](https://www.udemy.com/)
  - [CS50 lectures](https://www.youtube.com/channel/UCcabW7890RKJzL968QWEykA)
  - [FreeCodeCamp](https://www.freecodecamp.org/)
  - [HTML Academy](https://htmlacademy.ru/)
- Sololearn
  - HTML, JavaScript, Coding for Marketers, Resposive Web Design
- Books
  - **Grokking Algorithms** by _Aditya Bhargava_
  - **Eloquent JavaScript** by _Marijn Haverbeke_
  - **JavaScript for kids** by _Nick Morgan_
- JavaScript
  - [Learn JavaScript](https://learn.javascript.ru/)

## Experience:

- RedTrack
  - Product Specialist (5 months)
    - RedTrack is ad tracking and conversions attribution platform for media buyers. My responsibilities were to help customers consolidate data across their media buying activities and turn insights into actions through real-time notifications and campaign optimization rules based on granular data.
- Tapston
  - JavaScript Developer (8 months)
    - Creating websites using React, Redux, NextJS.

## Languages:

- English - _C1 level of proficiency_
- Chinese - _B2 level of proficiency_
- Italian - _A2 level of proficiency_
- Hebrew - _A2 level of proficiency_
- Russian - _Native_

---

> “Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”
> ― Linus Torvalds
