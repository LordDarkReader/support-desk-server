const express = require('express');
const router = express.Router();
const {getNotes, addNotes} = require('../controllers/noteController');

const {protect} = require('../middleware/authMiddleware');
 
router.route('/').get(protect, getNotes).post(protect, addNotes);

module.exports = router;

