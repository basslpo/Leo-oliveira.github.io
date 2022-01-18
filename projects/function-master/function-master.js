//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for ( var key in object) {
        arr.push(object[key])
    }
    
    return arr;
        
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    for ( var key in object) { 
        array.push(key)
    }
    return array.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
     for( var key in object) { 
         if ( typeof object[key]  === 'string') {
         arr.push(object[key])
         }
    }
    return arr.join(' ');
};

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// check it
function arrayOrObject(collection) {
    return (Array.isArray(collection)) ? 'array'
    : (typeof collection === 'object') ? 'object'
    : null;

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
        return string[0].toUpperCase() + string.slice(1, string.length)


};

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // check it 
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
};

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    
        var string = object.name;
        var capString = string[0].toUpperCase() + string.slice(1, string.length);
        return 'Welcome ' + capString + '!';
      

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 var name = object.name;
 var species = object.species;
 var capName = name[0].toUpperCase() + name.slice(1, name.length);
 var capSpecies = species[0].toUpperCase() + species.slice(1, species.length);
 return capName + ' is a ' + capSpecies;
};

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// check if object noise's array exist 
// if array exist within object,  return it as a string separated by space .join(' ' ) else return there are no noises

        
        if ( Array.isArray(object.noises) && object.noises.length > 0) { 
            return object.noises.join(' ');
        } else { 
            return "there are no noises";
        }
    };




 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

return string.includes(word) 
    


};

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// not done! needs attention 

function addFriend (name, object) {
// shoud take a name and an object 
// should add name to objects friends array
    object.friends.push(name);
    return object;


};

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


        
    function isFriend(name, object){
        if (object.friends === undefined){
            return false;
        } else return object.friends.includes(name)
    }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(name, array) {

    var nameList = [];
    var endArray = [];
    var noValue = null;
        for(var i=0; i<array.length; i++){
            if(name === array[i].name){
                noValue = array[i];
            }else{
                nameList.push(array[i].name);
            }
        }
        if(noValue === null){
            return nameList;
        }
        for(var i=0; i<nameList.length; i++){
            if(noValue.friends.indexOf(nameList[i]) < 0){
                endArray.push(nameList[i]);
            }
        }
        return endArray;



}
   
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
        object[key] = value;   
        return object;
      }


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for (var i = 0; i < array.length; i++){
        for (var key in object) {
            if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let unique = [...new Set(array)];
    return unique;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
