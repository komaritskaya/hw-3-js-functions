// 1

function splitAndMerge(str, sp) {
  var words = str.split(' ');
  return words.map(function(word) {
    return word.split('').join(sp);
  }).join(' ');
}

// Test:
console.log(splitAndMerge("My name is John"," ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!",",")); // "H,e,l,l,o W,o,r,l,d,!"


// 2

function convert(obj) {
  if (!Object.entries) {
    Object.entries = function(obj) {
      var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i); 
      while (i--) {
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      };

      return resArray;
    };
  }
  return Object.entries(obj);
}

// Test:
const user = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(user)); // [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]


// 3

function toCamelCase(str) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const words = str.split(/[\s-_]/);
  
  return words.map(function(word) {
    if(words.indexOf(word) === 0) {
      return word;
    } else {
      return capitalizeFirstLetter(word);
    }
  }).join('');
}

// Test:
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"


// 4

function reverseWords(string){
  var words = string.split(' ');
  return words.map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

// Test:
console.log(reverseWords('A fun little challenge!')); // "A nuf elttil !egnellahc"


// 5

function stringExpansion(str) {
  var newArr = [];
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (isNaN(Number(str[i])) && isNaN(Number(str[i-1]))) {
      newArr.push(str[i]);
    } else if (isNaN(Number(str[i+1]))) {
      for (var j = 0; j < str[i]; j++) {
        newArr.push(str[i+1]);
      }
    }
  }
  return newArr.join('');
}

// Test:
console.log(stringExpansion('3D2a5d2f')); // "DDDaadddddff"
console.log(stringExpansion('3d332f2a')); // "dddffaa"
console.log(stringExpansion('abcde')); // "abcde"


// 6

function largest() {
  var args = [].slice.call(arguments);
  var max = args.reduce(function(a, b) {
    return Math.max(a, b);
});
  return max;
}

function smallest() {
    var args = [].slice.call(arguments);
  var min = args.reduce(function(a, b) {
    return Math.min(a, b);
});
  return min;
}

// Test:
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5


// 7

function transform(array) {
  return array.map(function(element) {
    return function() {
      return(element);
    }
  });
}

// Test:
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // 40
console.log(newArray[4]()); // 50


// 8

function sum() {
  var args = [].slice.call(arguments);
  if(args.length === 0){
    return 0;
  } else {
  return args[0] + sum.apply(null, args.slice(1));
  }
}

// Test:
console.log(sum(1,3,5,7)); // 16


// 9

function countDown(number) {
  if (number <= 0) { 
    console.log(0);
  } else {
  console.log(number);
  countDown(number - 1);
  }
}

// Test:
countDown(3); // 3 2 1 0
countDown(5); // 5 4 3 2 1 0


// 10

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - function cannot be bound as it\'s not callable');
  }

  var targetFunction = this;
  var args = [].slice.call(arguments, 1);
  return function () {
    return targetFunction.apply(context, args.concat([].slice.call(arguments)));
  };
};

//Test:
var user = {
  firstName: "Вася",
  sayHi() {
    alert("Привет, " + this.firstName + "!");
  }
};
var sayHi = user.sayHi.myBind(user);
setTimeout(sayHi, 1000); // "Привет, Вася!"

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10



