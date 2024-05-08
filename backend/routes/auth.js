// backend/routes/auth.js
const express = require('express');
const { users } = require('../models/user');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
