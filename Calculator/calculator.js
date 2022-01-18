//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//use urlencoded when getting from html (extended allows to post message object)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	// res.send("Hello World");
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	// console.log(req.body);
	var sum = parseInt(req.body.num1) + parseInt(req.body.num2);
	res.send("The sum is = " + sum);
});

app.get("/bmi", function (req, res) {
	// res.send("Hello World");
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", function (req, res) {
	// console.log(req.body);
	w = parseFloat(req.body.weight);
	h = parseFloat(req.body.height);
	var bmi = (w / (h * h)) * 10000;

	res.send("Your BMI is = " + bmi);
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});
