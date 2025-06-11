const express = require('express');
const adminRouter = express.Router();
const complainmodel = require('../models/complain'); // Adjust path if needed
const task = require("../models/task");
const Accepted = require("../models/request");

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

adminRouter.get("/admin", async(req, res)=>{
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

adminRouter.get("/completeVerify", async(req, res) => {
  // const complaints = await complainmodel.find({status : task-submitted});
  const userId = req.cookies?.id;  // Get the user ID from cookies
  if (!userId) return res.status(400).send("User not authenticated");
  console.log(userId)
  
  // Find accepted complaints for the logged-in user and populate the complains field
  const acceptedData = await Accepted.findOne({ userId}).populate("complains");
  // console.log(acceptedData)

  const tasks = await task.find({status : "pending"})
  // return res.render("verifyForComplete.ejs", { accepted: acceptedData}, {tasks:tasks});
  return res.render("verifyForComplete.ejs", { accepted: acceptedData, tasks: tasks });

});



adminRouter.delete('/reject/:id', async (req, res) => {
  try {
    await complainmodel.findByIdAndDelete(req.params.id);
    res.send('Complaint rejected and deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting complaint');
  }
});

adminRouter.post('/complaint/:id/accept', async (req, res) => {
  try {
    const complaintId = req.params.id;
    await complainmodel.findByIdAndUpdate(complaintId, { status: "complete" });
    res.status(200).send("Complaint marked as complete.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

adminRouter.post("/approveComplaint", async (req, res) => {
  const id = req.body.complaintId;
  res.redirect("/verify/details/:id"); // or wherever you want
});

adminRouter.get('/verify/details/:id', async (req, res) => {
  try {
    const complaintId = req.params.id;
    console.log(complaintId);

    const tasks = await task.find({taskId: complaintId});
    console.log(tasks);
    const complaint = await complainmodel.findById(complaintId);
    // console.log(complaintId)
    if (!complaint) {
      return res.status(404).send('Complaint not found');
    }
    res.render('details.ejs', { complaint, tasks});
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = adminRouter;
