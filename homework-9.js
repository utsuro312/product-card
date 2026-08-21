// Уровень 1

import { userComments } from "./comments.js";

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

const hasFurniture = (object) => object.type === "furniture";

console.log(stuff.some(hasFurniture));

function reverseMassive(massive) {
  console.log(massive.reverse());
};

reverseMassive(stuff);
reverseMassive(numbers);

// Уровень 2

const userCommentsWithCom = userComments.filter((comment) => comment.email.endsWith(".com"));

console.log(userCommentsWithCom);

const userCommentsWithChangedPostId = userComments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ?  2 :  1
  }
});

console.log("comments with changed postId: ", userCommentsWithChangedPostId);

const userCommentNames = userComments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name
  }
});

console.log("comments with only name and id: ", userCommentNames);

const userCommentsWithIsInvalid = userComments.map((comment) => {
  return {
    ...comment,
    isInvalid:  comment.body.length > 180 ? true : false
  }
});

console.log("comments with isInvalid: ", userCommentsWithIsInvalid);

const userEmailsReduce = userComments.reduce((acc, userComment) => {
  acc.push(userComment.email);
  return acc;
},[]);

// Уровень 3

console.log("emails:", userEmailsReduce);

const userEmailsMap = userComments.map((userComment) => {
  return userComment.email;
});

console.log("emails:", userEmailsMap);

const userEmailsString = userEmailsMap.toString();

console.log("emails:", userEmailsString);