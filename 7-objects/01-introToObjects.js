/*
OBJECTS
    - container that stores multiple sets of data
        * stores data as key/value pairs
    - objects are denoted by {}
*/

let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {
                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    },
    season2: {},
    season3: {},
    season4: {}
}

// to access data inside of an object, or to dive into an object, we use dot notation

// console.log('all data:', netflix);

// console.log('season info:', netflix.season1.seasonInfo);
// console.log('specific episode name:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

// console.log a specific episode number and name.
// console.log('specific episode number and name:', netflix.season1.seasonInfo.episodeInfo[1].episode, netflix.season1.seasonInfo.episodeInfo[1].episodeName);

// console.log a specific episode number and name. set a reference point to reduce keystrokes in the console.log
let s1e2 = netflix.season1.seasonInfo.episodeInfo[1];
console.log(s1e2);
console.log(`Episode: ${s1e2.episode}    Episode name: ${s1e2.episodeName}`);

// for (let i = 0; i < netflix.season1.seasonInfo.episodeInfo.length; i++/)

/*
JSON
    - JSON stands for JavaScript Object Notation
    - JSON syntax is derived from JavaScript Object syntax, but JSON data is in a text only format (a string)
    - JSON data exists as a string and needs to be converted to a native JavaScript object if we want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

/* 
KEYS
*/
// console.log(Object.keys(spaceJam.toonSquad)); // print all keys in toonSquad
console.log(Object.keys(spaceJam.toonSquad).toString()); // print all the keys as a string
// console.log(Object.keys(spaceJam.toonSquad.duck)); // prints the indices of the value of this key "Daffy Duck"

/*
VALUES
*/
// console.log(Object.values(spaceJam.nbaPlayers));

/*
OBJECT BRACKET NOTATION ====================================================================================
    - object bracket notation, just like dot notation, allows us to find a value in an object
    - object bracket notation also allows us to set the key of an object
    - also handy if we want to store keys of an object as a variable

    - object bracket notation works because all keys inside of an objectd are strings, even though they're not wrapped in a single or double quotes
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// let test = Object.keys(garden);  // returns an array of all keys in the object
// console.log(test);
// console.log(typeof test[0]);

// let zucchini = garden['vegetable'];
// console.log(zucchini);

/*
    Create a new, empty object.
    Create a new key/value
*/
let baking = {};
baking['zucchini'] = 'better make some bread';
console.log(baking);

console.log(baking[garden['vegetable']]);

baking['flour'] = 'self rising';
console.log(baking);

let testObj = {
    "Spaces Here":  true,
    noSpaces:   true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);