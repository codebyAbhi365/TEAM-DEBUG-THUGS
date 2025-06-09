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
  const complaints = await complainmodel.find({ status: 'pending' });
    return res.render("verifyImage.ejs",{complaints});
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
