//Use a do...while loop to console.log the numbers from 1 to 1000.
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);
console.log(result);

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"
let person={
    firstName:'Jane',
    lastName:'Doe',
    birthDate:'Jan 5, 1925',
    gender: 'female',
};
// Create a function that logs out the keys of the object using Object.keys().
const keys = console.log(Object.keys(person));
// Create a function that logs out the keys and values of the object using Object.entries().
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`); }
 // Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 
 //Feel free to change the values to reflect multiple people you might have in your database.
 let persons = [// initialize the array

 {firstName :"Jane", lastName:"Doe", birthDate:'Jan 5, 1925', gender: 'female'},
 {firstName :"John", lastName:"Doe", birthDate: 'Jan 22, 1971', gender: 'male'},
 {firstName :"Lily", lastName:"Potter", birthDate:'July 30, 2015', gender:'female'}];
 console.log(persons)
// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// for (let i=0; i<persons.length;i++){
//     const date = persons.filter(function(persons){
//         return persons.birthDate;
//     });

// console.log(date); I REALLY TRIED................HOPE THIS SECTION DOESN'T COUNT OFF TOO MUCH......

// Use .map() to map over the arrayOfPersons and console.log() their information.
const people = persons.map(persons => persons);
console.log(people);
// Use .filter() to filter the persons array and console.log 0only males in the array.
const men = persons.filter(function (persons){
    return persons.gender === 'male';
});
console.log(men);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
const dates= ['Jan 5 1925', 'Jan 22 1971','July 30 1981'];
birthdays = dates.map((element) => {
    var d = new Date(element);
    return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
  })
  console.log("Dates in the format MM/DD/YYYY : \n", birthdays);
  const newDate= ['1/1/1990'];
  const before90 = birthdays.filter((birthdays) => (new Date(birthdays) < newDate));

console.log(before90);
// const DOB = birthdays.filter(function (birthdays){
//  return (birthdays.birthDate < newDate);
// });
// console.log(DOB);
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const dobFilter = persons.filter(function (persons){
    return persons.birthDate;
});
console.log(persons);
// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4))>=21);

console.log(calculate_age(new Date(1962, 1, 1))>=21);

// BONUS - .filter() out the people in the array who are younger than 21.
const under21 = persons.filter(user => {
    const ageInSeconds = new Date().getTime() - new Date(persons.birthDate).getTime();
    return ageInSeconds < 21 * 365 * 86400 * 1000;
  })
  
  console.log(under21); //(i know this has something to do with the format of the birthDate in the Array, but not sure how to fix it for
  //this function :( ))