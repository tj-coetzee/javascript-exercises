const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        if (!curr['yearOfDeath']) { 
            currAge = 2024 - curr['yearOfBirth']; 
        } else {
            currAge = curr['yearOfDeath'] - curr['yearOfBirth'];
        }

        if (!oldest['yearOfDeath']) {
            oldestAge = 2024 - oldest['yearOfBirth'];
        } else {
            oldestAge = oldest['yearOfDeath'] - oldest['yearOfBirth'];
        }

        if (currAge > oldestAge) {
            return curr;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
