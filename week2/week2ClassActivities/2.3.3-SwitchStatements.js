// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 3;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 3:
    console.log(`Today is Wednesday`);
    break;
  case 1:
    console.log(`Today is Monday`);
    break;
  // Note the code blocks in the next 2 cases: Why?
  case 4:
    console.log(`Today is Thursday`);
      break;
  case 5:
    console.log(`Tomorrow it's the weekend!`);
       break;
  default:
    console.log(`It's the End of the World as We Know It`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case 6||0:
    console.log(`It's the Weekend !!`);

}
if (dayName !== 'Today'){
console.log(dayName);
}
