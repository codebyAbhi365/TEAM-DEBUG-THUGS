const express = require('express');
const adminRouter = express.Router();
const complainmodel = require('../models/complain'); // Adjust path if needed

// Approve complaint
adminRouter.post('/approve/:id', async (req, res) => {
  try {
    await complainmodel.findByIdAndUpdate(req.params.id, { status: 'approved' });
    res.send('Complaint approved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

adminRouter.get("/", async(req, res)=>{
  const complaints = await complainmodel.find();
  rejected_count = 0;
  approved_count = 0;
  pending_count = 0;
  complaints.forEach(complaint => {
    if(complaint.status === "rejected"){
      rejected_count += 1; 
    }
    if(complaint.status === "approved"){
      approved_count += 1; 
    }
    if(complaint.status === "pending"){
      pending_count += 1; 
    }
  });
    return res.render("verifyImage.ejs",{complaints,rejected_count,approved_count,pending_count});
})

adminRouter.delete('/reject/:id', async (req, res) => {
  try {
    await complainmodel.findByIdAndDelete(req.params.id);
    res.send('Complaint rejected and deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting complaint');
  }
});


module.exports = adminRouter;
