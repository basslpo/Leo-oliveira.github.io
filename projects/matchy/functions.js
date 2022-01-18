/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, name) { 
    for ( let i = 0; i < arr.length; i ++) { 
        if ( arr[i]['name'] === name) { 
                return arr[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(array, nameObj, replaceObj) { 
    for ( let i = 0; i < array.length; i++) { 
        if ( array[i]['name'] === nameObj) { 
            return array[i] = replaceObj;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, name) { 
    for ( let i = 0; i < array.length; i++) { 
        if ( array[i]['name'] === name) { 
            array.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function add(array, animalObj) { 
     for ( let i = 0; i < array.length; i++) { 
         if ( animalObj['name'] != array[i]['name']) { 
             if ( animalObj['species'].length > 0){
                 if ( animalObj['name'].length > 0){ 
                     return array.push(animalObj);
                 }
             }
         } else return;
     }
 }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
