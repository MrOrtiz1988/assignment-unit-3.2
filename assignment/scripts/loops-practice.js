console.log('****** Loops Practice *******');


// 1. 'for' loop

console.log('---- 1. For loops ----');

// Example: a for loop to console.log numbers from 0 to 3

console.log('count from 0 to 3');

// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)

for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?

console.log('count from 0 to 5');

//change i<4 to i<6 so that it logs to the 5th.

for (let i=0; i<6; i++) {  
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

console.log('count from 3 to 5');

//start i at 3 instead of 0 to start the count at 3

for (let i=3; i<6; i++) {  
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?

console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

//start i at 1 or 2, if you start at 0 it will include 0. my conditional has less than or equals 10 so ten is included
//rather than putting less than 11 because it makes more sense to me. i added an if statement to only log the even number that 
//it loops through. i % 2 means whatever i is remainder 2. if it equals 0 then its an even number.
//if i wanted odd numbers i would do i % 3 == 0 instead.

for(i=2; i<=10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for(i=5; i >= 0; i--){
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
