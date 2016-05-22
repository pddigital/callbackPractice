/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var newArray = [];


var uniq = function(array, callback) {
    array = array.sort();
    for(var i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        newArray.push(array[i]);
      }
    }
      return callback(newArray);
};   

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for last

var last = function(array, callback) {
    return callback(names[names.length - 1]);   
};

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for multiply

var multiply = function(num1, num2, callback) {
    return callback(num1 * num2);
};

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains


function contains(namesArray, checkFor, callback) {
    return callback(namesArray.includes(checkFor));
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var newArray = [];


var uniq = function(array, callback) {
    array = array.sort();
    for(var i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        newArray.push(array[i]);
      }
    }
      return callback(newArray);
};   

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var item = "Blaine";

var each = function(array, callback) {
    return callback(item, array.indexOf(item));
};

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(array, item, callback) {
    var x = array.find(function(x) {
      return x.id === item;
    });
    return callback(x);
};

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});