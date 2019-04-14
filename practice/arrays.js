const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const userArray = [];
const newArray = array.forEach(element =>
  userArray.push(element.username + "!")
);
console.log(userArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(element => element.username + "?");
console.log(mapArray);

//Filter the array to only include users who are on team: red
const redArray = array.filter(element => element.team === "red");
console.log(redArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, num) => {
  return acc + num.score;
}, 0);
console.log(totalScore);

// BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const items = array.forEach(element => console.log(element.items + "!"));

const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});
console.log(answer);
