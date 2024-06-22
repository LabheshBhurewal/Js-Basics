const marvel_heroes = ["thor","Ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// const new_array=marvel_heroes.concat(dc_heroes);
// console.log(new_array);

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

const another_array=[1,2,4,[6,7,7],8,[23,[6,4,3]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

const score =100;
const score1 =200;
const score2 =300;
console.log(Array.from("Hitesh"));
console.log(Array.isArray("Hitesh"));
console.log(Array.of(score,score1,score2));
