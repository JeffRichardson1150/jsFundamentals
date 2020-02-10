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
