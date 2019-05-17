// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Stuff worked!");
//   } else {
//     reject("Error, it broke!");
//   }
// })

// promise
//   .then(result => result + "!")
//   .then(result2 => {
//     throw Error
//     console.log(result2)
//   })
//   .catch(() => console.log("error!"))

// Promise
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("success!");
  } else {
    reject("fail!");
  }
});

promise.then(result => console.log(result));

// Promise.resolve
const promise2 = new Promise.resolve("success!");
promise2.then(value => console.log(value));

// Promise.reject
const promise3 = Promise.reject("failed");
promise3.then(() => console.log("Ooops something went wrong"));

// Promise.all
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[3]);
});
