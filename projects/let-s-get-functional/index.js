// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Leo-oliveira.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {

  let males = _.filter(array, function (customer) {
    return customer.gender === 'male';


  });
  return males.length;
}


var femaleCount = function (array) {

  let females = _.reduce(array, function (accumulator, current,) {
    if (current.gender === 'female') {
      accumulator += 1;
    }
    return accumulator;

  }, 0)
  return females;
}

var oldestCustomer = function (arrayOfObjects) {

  let oldestName = '';
  let oldestAge = [];

  for (let i = 0; i < arrayOfObjects.length; i++) {
    let personObj = arrayOfObjects[i];
    let name = personObj.name; // string
    let age = personObj.age;//number
    if (age > oldestAge) {
      oldestAge = age; //reassigning oldestAge
      oldestName = name;  //reassigning oldestName
    }
  }
  // return who is the eldest
  // dot notation to access the name 
  return oldestName;
}

var youngestCustomer = function (arrayOfObjects) {
  let yName = '';
  let yAge = 200;

  for (let i = 0; i < arrayOfObjects.length; i++) {
    let personObj = arrayOfObjects[i];
    let name = personObj.name; // string
    let age = personObj.age;//number
    if (age < yAge) {
      yAge = age //reassigning 
      yName = name;  //reassigning 
    }
  }
  
  return yName;
};


  var averageBalance = function (arrayOfObjects) {
    // find customer's avarage balance
    var sum = 0;
    var number = arrayOfObjects.length;
  
    for (var i = 0; i < arrayOfObjects.length; i++) {
      var current = arrayOfObjects[i].balance;
      var result = current.replace(/[$,]/g,'');
      var numResult = parseFloat(result)
      sum += numResult;
    }
    var avg = sum / number;
  
    return avg;
  };




var firstLetterCount = function (arrayOfCustomers, letter) {

  var result = 0;

    for (var i = 0; i < arrayOfCustomers.length; i++) {
        if (arrayOfCustomers[i].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            result++;
        }
    }

    return result;
  
};
 



var friendFirstLetterCount = function(array, letter) { // check
  var matchArr = _.filter(array, function(customer){
    return customer.name === customerName;
      });
      var matchObj = matchArr[0];

      var friendsFirstLetter = _.filter(matchObj.friends, function(friend){
        return friend.name[0] === matchArr.toUpperCase();
      }); 
      return friendsFirstLetter.length;
  
  };

var friendsCount;

var topThreeTags = function(array) { // check
  // create tag Obj  
  var tagObj = {}; 
  // loop input array 
  for ( let i = 0; i < array.length; i ++){
    var tags = array[i].tags;
    for ( let i = 0; i < tags.length; i++){
      if ( tagObj[tags[i]]) {
        tagObj[tags[i]] += 1;
      } else {
        tagObj[tags[i]] = 1;
      }
    } 
  }
  return tagObj; //sort in descending order 
}

var genderCount = function(array) { 
  let genderObj = _.reduce(array, function(countObj, customer, index) { 
    if ( countObj[customer.gender]) {
      countObj[customer.gender] +=1;
    } else { 
      countObj[customer.gender] = 1;
    }
    return countObj;
  }, {}); 
  return genderObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
