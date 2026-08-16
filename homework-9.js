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

const userCommentsWithChangedPostId = userComments.map((comment) => 
  {
    comment.id <= 5 ? comment.postId = 2 : comment.postId = 1
    return [comment.id,comment.postId,comment.name,comment.email,comment.body];
  }
);

console.log("comments with changed postId: ", userCommentsWithChangedPostId);

const userCommentsWithOnlyNameId = userComments.map((comment) => 
  {
    return [comment.id,comment.name];
  }
);

console.log("comments with only name and id: ", userCommentsWithOnlyNameId);

const userCommentsWithIsInvalid = userComments.map((comment) => 
 {
  comment.body.length > 180 ? comment.isInvalid = true : comment.isInvalid = false;
  return [comment.id,comment.postId,comment.name,comment.email,comment.body,comment.isInvalid];
 }
);

console.log("comments with isInvalid: ", userCommentsWithIsInvalid);

const userEmailsReduce = userComments.reduce((acc, userComment) => {
  const commentClone = {...userComment};
  delete commentClone.name;
  delete commentClone.id;
  delete commentClone.body;
  delete commentClone.postId;
  delete commentClone.isInvalid;
  acc.push(commentClone);
  return acc;
},[]);

// Уровень 3

console.log("emails:", userEmailsReduce);

const userEmailsMap = userComments.map((userComment) => {
  const commentClone = {...userComment};
  return [userComment.email];
});

console.log("emails:", userEmailsMap);

const userEmailsString = userEmailsMap.toString();

console.log("emails:", userEmailsString);