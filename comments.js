// Create web server
// Create a route that returns all comments
// Create a route that returns all comments for a specific post
// Create a route that returns all comments for a specific user

const express = require('express');
const app = express();

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/posts/:postId/comments', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = comments.filter((comment) => comment.postId === postId);

  res.json(postComments);
});

app.get('/users/:userId/comments', (req, res) => {
  const userId = Number(req.params.userId);
  const userComments = comments.filter((comment) => comment.userId === userId);

  res.json(userComments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});