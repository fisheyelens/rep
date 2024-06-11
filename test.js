

// var add1 = (function () {
//   var a = 10;
//   return function (x, y) {
//   return x + y + a;
// };
// }());

// console.log(add1(1,2));


// ----------------------------------------------------------------
// * 이게 맞나??

  // const createPerson = function (callback) {
  //   let person = {};
  //   callback(person, setName);
  // };

  // 축약 버전

// const createPerson = (callback) => {
//   let person = {};
//   callback(person, setjob);
// };

// const setJob = (person) => {
//   person.job = "미남";
//   console.log(person);
// };

// createPerson((person, callback) => callback(person, setName));

const sumsum = (x, y) => x + y;
console.log(sumsum(2,5));

// const hmm = function (){
//   return function (x, y) {
//   return x + y + a;
// }
// }

// * 오 이게 맞네??오호라?~~~~

const hmm = function (x,y){
  return x + y ;
}
console.log(hmm(2,4));
