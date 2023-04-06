// create an Array using an Array literal
const birds = ["cardinal", "bluejay", "pigeon", "dove", "swan"];
console.log (birds);
let nest = birds
// access the 1st item in the Array
console.log (birds[0]);
// access the last item in the Array
console.log (birds[4]);
// print the length of the Array
console.log (birds.length);
let number = 5
// use the length property to access the last item in the Array
console.log [number[number.length - 1]]
// with for...of, loop over the Array, modify the value and add to a different Array
for (let nest of birds) {
  console.log(nest);
}
