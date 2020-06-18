const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route POST api/users
// @desc Register a User
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please Include A Valid E-Mail').isEmail(),
    check(
      'password',
      'Please Enter A Password With 6 Or More Characters'
    ).isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Passed');
  }
);

module.exports = router;
