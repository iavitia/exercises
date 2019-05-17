fetch("http://jsonplaceholder.typicode.com/users")
  .then(resp => resp.json())
  .then(console.log());

// ASYNC AWAI
async function fetchUsers() {
  const resp = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

const urls = [
  "http://jsonplaceholder.typicode.com/users",
  "http://jsonplaceholder.typicode.com/albums",
  "http://jsonplaceholder.typicode.com/posts"
];

Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
  .then(array => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("oops");

// ASYNC AWAIT
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops!", err);
  }
};

// 1) Convert the below promise into async await
fetch("https://swapi.co/api/starships/9/")
  .then(response => response.json())
  .then(console.log);

async function fetchData1() {
  const fetchShips = await fetch("https://swapi.co/api/starships/9/");
  const data = await fetchShips.json();
  console.log(data);
}

// 2) Update the function below from the video to also have async await for this line: fetch(url).then(resp => resp.json())
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const getData = async function() {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// 3) Add a try catch block to the #2 solution in order to catch any errors. Now chnage one of the urls so you console.log your error with 'ooooooops'
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};
