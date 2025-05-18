function sumNumbers(...numbers) {
  const sum = numbers.reduce((ac, c) => ac + c, 0);
  console.log("Sum:", sum);
}

sumNumbers(10, 20, 30, 40); 
