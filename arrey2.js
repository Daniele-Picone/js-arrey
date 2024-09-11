let numbers = [4, 8, 3, 10, 5];
console.log(numbers);

    let somma = numbers.reduce(  ( acc, number ) => acc + number )

console.log( somma );

let media = somma / numbers.length;

console.log(media);

  
let numbers2 = numbers.filter(  (number) => number < media  );

console.log(numbers2);



