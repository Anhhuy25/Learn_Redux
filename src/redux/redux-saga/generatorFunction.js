// // Khai bao
// function* anotherGeneratorFunc(param) {
//   yield `i love ${param}`;
// }

// // yield* tra ve generator function khac
// function* myGeneratorFunc(x) {
//   yield x * 2;
//   yield* generator(x);
//   yield "Finish them!!!";
// }

// function* generator(x) {
//   yield x + 2;
// }

// const result = myGeneratorFunc(5);
// const a = result.next().value + 3;
// const b = result.next().value + a + 5;
// console.log(a);
// console.log(b);
