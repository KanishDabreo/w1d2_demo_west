// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments

const args = process.argv.slice(2);

console.log('args:', args);

// edge case: check if we have at least 2 arguements => error message
if (args.length < 2) {
  console.log('Please enter at least 2 arguments!');
  process.exit();
}

const convertToNb = function (args) {
  const output = [];

  for (let num of args) {
    output.push(Number(num));
  }

  return output;
};

const allInt = function (numbers) {
  const output = [];

  for (let num of numbers) {
    if (Number.isInteger(num)) {
      // add the arguments
      output.push(num);
    }
  }

  return output;
};

const allNums = function (numbers) {
  for (let num of numbers) {
    if (isNaN(num)) {
      console.log('Please add only numbers!');
      // break? or return ? process.exit()
      process.exit();
    }
  }

  return numbers;
};

// single responsibility principle
// a function should do a single thing

const sum = function (numbers) {
  // c-style loop
  // for (let i = 0; i < args.length; i++)

  // create a placeholder for the total value
  let total = 0;

  // for of
  // iterate throught the arguments
  for (let num of numbers) {
    // edge case: if  is not a whole number, skip it

    // integer?
    // num % 1 === 0
    // Number.isInteger()

    // convert the str to number
    // const convertedNb = Number(num);

    // edge case: If any argument is not a number, output an error message

    // add the arguments
    total += num;

    // console.log(
    //   'num:',
    //   num,
    //   'total:',
    //   total,
    //   'type:',
    //   typeof num
    // );
  }
  return total;
};
// print the sum of the arguments

// const convertedNums = convertToNb(args);
// const nums = allNums(convertedNums);

console.log('Total:', sum(allInt(allNums(convertToNb(args)))));
