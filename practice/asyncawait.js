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
