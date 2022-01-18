var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        if ( customer.gender === 'male') { 
            return true;
        } else { 
            return false
        }
    })
    return males.length;
};