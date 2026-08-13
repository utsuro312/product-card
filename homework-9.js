const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter((number) => number >= 5);

console.log(numbersFromFive);

const stuff = [
  {
    name: "persuasion",
    type: "book",
  },
  {
    name: "sapphire",
    type: "gem",
  },
  {
    name: "sofa",
    type: "furniture",
  },
  {
    name: "ruby",
    type: "gem",
  },
  {
    name: "garnet",
    type: "gem",
  },
];

// Checks whether an element is even
const hasFurniture = (object) => object.type === "furniture";

console.log(stuff.some(hasFurniture));

function reverseMassive(massive) {
  console.log(massive.reverse());
};

reverseMassive(stuff);
reverseMassive(numbers);

//const hasCom = (object) => object.type = ".com";

import { userComments } from "./comments.js";

const userCommentsWithCom = userComments.filter((comment) => comment.email.endsWith(".com"));

console.log(userCommentsWithCom)

function rearrangePostId(comment) {
  comment.id <= 5 ? comment.postId = 2 : comment.postId = 1
  return [comment.id,comment.postId,comment.name,comment.email,comment.body];
}

const userCommentsWithChangedPostId = userComments.map(rearrangePostId)

console.log(userCommentsWithChangedPostId)

function removeEverythingExceptNameId(comment) {
  return [comment.id,comment.name];
}

const userCommentsWithOnlyNameId = userComments.map(removeEverythingExceptNameId)

console.log(userCommentsWithOnlyNameId)

function setIsValid(comment) {
  comment.body.length < 180 ? comment.isValid = true : comment.isValid = false;
  return [comment.id,comment.postId,comment.name,comment.email,comment.body,comment.isValid];
}

const userCommentsWithIsValid = userComments.map(setIsValid)

console.log(userCommentsWithIsValid)

const userEmailsReduce = userComments.reduce((acc, userComment) => {
  const commentClone = {...userComment};
  delete commentClone.name;
  delete commentClone.id;
  delete commentClone.body;
  delete commentClone.postId;
  delete commentClone.isValid;
  acc.push(commentClone);
  return acc;
},[]);

console.log("emails:", userEmailsReduce)

const userEmailsMap = userComments.map((userComment) => {
  const commentClone = {...userComment};
  return [userComment.email];
});

console.log("emails:", userEmailsMap)

const userEmailsString = userEmailsMap.toString();;

console.log("emails:", userEmailsString)