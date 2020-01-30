let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Terminator', 'Predator', 'The Jerk'];

movies.forEach(movieTitle => console.log(movieTitle)); // list the movies

movies.push('Oceans Eleven'); // add another movie at the end
console.log(movies);

movies.splice(1, 1, 'Guns of Navarone'); // replace Attack of the Clones
console.log(movies);
// 
