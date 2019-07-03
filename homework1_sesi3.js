const arrayOfWords = ['cucumber', 'tomatos', 'avocado', 'banana', 'watermelon', 'apple', 'orange', 'kiwi'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        let resultArray = array.map(item => {
            if(typeof item === 'string') {
                return item.toUpperCase();
            } else {
                reject(`ERROR: makeAllCaps Method-> item ${item} bukan string!`);
            }
        })
        resolve(resultArray);
    })
}

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            array.forEach((item) => {
                if(typeof item !== 'string') {
                    reject(`ERROR: sortWords Method-> item ${item} bukan string!`);
                }
            })
            let resultArray = array.sort();
            resolve(resultArray);
        } else {
            reject(`ERROR: sortWords Method-> bukan array!`);
        }
    })
}

const makeAllCaps2 = async (array) => {
    return await makeAllCaps(array);
}

const sortWords2 = async (array) => {
    return await sortWords(array);
}


//with Promise
makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error));

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error));

//with Async Await
makeAllCaps2(arrayOfWords)
.then(sortWords2)
.then((result) => console.log(result))
.catch(error => console.log(error));

makeAllCaps2(complicatedArray)
.then(sortWords2)
.then((result) => console.log(result))
.catch(error => console.log(error));
