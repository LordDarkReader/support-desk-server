const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Note = require('../models/noteModel');
const Ticket = require('../models/ticketModel');



// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)
  
    if (!user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    
    const url = req.baseUrl;
    const ssd = url.substring(13,37);
   
    //const ticket = await Ticket.findById(req.params.ticketId)
    const ticket = await Ticket.findById(ssd);

    // if (ticket.user.toString() !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
  
    const notes = await Note.find({ticket: ssd})
  
    res.status(200).json(notes)
  });
  

// @desc    Create notes for a ticket
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNotes = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)
  
    if (!user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    
    const url = req.baseUrl;
    const ssd = url.substring(13,37);
   
    const note = await Note.create({
        text: req.body.text,
        isStaff: false,    
        ticket: ssd,
        user: req.user.id
    })
  
    res.status(200).json(note);
  });


module.exports = {
  getNotes,
  addNotes
}