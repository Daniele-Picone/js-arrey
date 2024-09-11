

let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];
console.log(numbers);

let crescente = numbers.sort( (a , b) => a - b  );
console.log(crescente);

let decrescente = numbers.sort(  (a , b) => b - a );
console.log(decrescente);

