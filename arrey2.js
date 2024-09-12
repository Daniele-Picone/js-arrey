let numbers = [4, 8, 3, 10, 5];
console.log(numbers);

    let somma = numbers.reduce(  ( acc, number ) => acc + number )

console.log( somma );

let media = somma / numbers.length;

console.log(media);

  
let minori = numbers.filter(  (number) => number < media  );

console.log(minori);



let maggiori = numbers.filter((number) => number > media );

console.log(maggiori);

console.log(`i numeri minori della media sono ${minori.length}`);
console.log(`I numeri maggiori della media sono  ${maggiori.length}`);
    