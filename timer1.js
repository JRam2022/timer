'use strict';
//array of numbers
let args = process.argv.slice(2);

//for every number we want to set a timer and beep at 0
//take in numbers

for (let i = 0; i < args.length; i++) {
  //catches any edge cases
  if (isNaN(args[i]) ||  args[i] < 0) {

    return console.log('Only positive integers accepted!');
  } else {
    setTimeout(() => {

      //process.stdout.write('\x07'); <--- NOT WORKING FOR ME
      process.stdout.write('BEEPING, ');
    }, args[i] * 1000); // input numbers x 1000 to conver to seconds
  }
}



