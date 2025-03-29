Waste Management Web App

Project Overview

The Waste Management Web App is designed to encourage responsible waste disposal through a community-driven reward system. Users can report garbage issues, clean up validated locations, and earn points that can be redeemed for benefits like bus passes and discounts.

Features
	•	User Authentication:
	•	Supports login for students and the general public.
	•	Garbage Reporting:
	•	Users report garbage by uploading a photo and GPS location.
	•	A minimum of 10 complaints is required for validation.
	•	Validation Process:
	•	Garbage reports are validated based on the number of complaints received.
	•	Cleanup and Proof Upload:
	•	Once validated, students can clean the area and upload proof of cleanup.
	•	Reward Points:
	•	Points are awarded for successful cleanups.
	•	Points can be redeemed for rewards like bus passes or discounts.

Flow Diagram

The process flow is as follows:
	1.	User Login (Student/Public)
	2.	Report Garbage (Photo + GPS)
	3.	Validation (10 Complaints Needed)
	4.	Cleanup and Proof Upload
	5.	Earn Points for Cleanups
	6.	Redeem Points (e.g., Bus Pass, Discounts)

Tech Stack
	•	Frontend: React, HTML, CSS, JavaScript
	•	Backend: Node.js, Express
	•	Database: MongoDB
	•	Cloud: AWS/GCP for hosting and file storage
	•	APIs: Google Maps API for location tracking

Installation
	1.	Clone the repository:

git clone https://github.com/username/waste-management-web-app.git  
cd waste-management-web-app  


	2.	Install dependencies:

npm install  


	3.	Set up environment variables in a .env file:

DB_URI=<your_database_uri>  
SECRET_KEY=<your_secret_key>  


	4.	Start the development server:

npm start  



Usage
	1.	Log in as a student or public user.
	2.	Report garbage by uploading a photo with GPS coordinates.
	3.	Wait for validation once 10 complaints are filed.
	4.	Clean the area and upload proof.
	5.	Earn points and redeem them for rewards.

Contribution

Contributions are welcome!
	1.	Fork the repository.
	2.	Create a feature branch:

git checkout -b feature-name  


	3.	Commit your changes:

git commit -m "Add new feature"  


	4.	Push to your branch:

git push origin feature-name  


	5.	Submit a pull request.