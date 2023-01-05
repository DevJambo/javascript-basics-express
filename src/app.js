const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

app.get('/strings/hello/:name', (req, res) => {
  const result = sayHello(req.params.name);

  res.status(200).json({ result });
});

app.get('/strings/upper/:string', (req, res) => {
  const result = uppercase(req.params.string);

  res.status(200).json({ result });
});

app.get('/strings/lower/:string', (req, res) => {
  const result = lowercase(req.params.string);

  res.status(200).json({ result });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    const result = firstCharacters(req.params.string, req.query.length);
    res.status(200).json({ result });
  } else {
    const result = firstCharacter(req.params.string);

    res.status(200).json({ result });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (n2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (n1 === 0) {
    res.status(200).json({ result: 0 });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (n2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (n1 === 0) {
    res.status(200).json({ result: 0 });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const a = parseInt(req.params.number, 10);
  if (Number.isNaN(a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(a) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const a = req.params.string;
  const b = req.params.character;
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(b, a) });
  }
});
module.exports = app;
